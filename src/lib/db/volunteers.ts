// lib/db/volunteers.ts

import { prisma } from "../prisma";
import { Prisma, SkillCategory, SkillLevel } from "@/generated/prisma";

export async function getVolunteerProfile(profileId: string) {
  return (await prisma.volunteer.findUnique({
    where: { profileId },
    include: {
      profile: true,
      skills: true,
      availability: true,
      applications: {
        include: {
          opportunity: {
            include: {
              organization: {
                include: {
                  profile: true,
                },
              },
            },
          },
        },
        orderBy: { appliedAt: "desc" },
      },
      assignments: {
        include: {
          opportunity: {
            include: {
              organization: {
                include: {
                  profile: true,
                },
              },
            },
          },
          sessions: {
            where: {
              scheduledAt: {
                gte: new Date(),
              },
            },
            orderBy: { scheduledAt: "asc" },
            take: 1,
          },
        },
        where: {
          status: "ACTIVE",
        },
      },
      reviewsGiven: {
        include: {
          assignment: {
            include: {
              opportunity: true,
            },
          },
        },
      },
    },
  })) as Prisma.PromiseReturnType<typeof prisma.volunteer.findUnique>;
}

export async function getVolunteerStats(volunteerId: string) {
  const volunteer = await prisma.volunteer.findUnique({
    where: { id: volunteerId },
    include: {
      assignments: {
        include: {
          sessions: true,
        },
      },
      applications: true,
      reviewsGiven: true,
    },
  });

  if (!volunteer) return null;

  const totalHours =
    volunteer.assignments.reduce(
      (sum: number, assignment: { sessions: any[] }) => {
        return (
          sum +
          assignment.sessions.reduce((sessionSum: number, session) => {
            return sessionSum + (session.duration || 0);
          }, 0)
        );
      },
      0
    ) / 60;

  const peopleHelped = volunteer.assignments.filter(
    (assignment: { status: string }) => assignment.status === "COMPLETED"
  ).length;

  const activeOpportunities = volunteer.assignments.filter(
    (assignment: { status: string }) => assignment.status === "ACTIVE"
  ).length;

  const avgRating =
    volunteer.reviewsGiven.length > 0
      ? volunteer.reviewsGiven.reduce(
          (sum: any, review: { rating: any }) => sum + review.rating,
          0
        ) / volunteer.reviewsGiven.length
      : 0;

  return {
    totalHours: Math.round(totalHours),
    peopleHelped,
    activeOpportunities,
    impactScore: Number(avgRating.toFixed(1)),
  };
}

export async function createVolunteerProfile(
  profileId: string,
  data: {
    skills: { category: SkillCategory; name: string; level: SkillLevel }[];
    languages: string[];
    experience?: string;
    education?: string;
    certifications: string[];
  }
) {
  return await prisma.volunteer.create({
    data: {
      profileId,
      languages: data.languages,
      experience: data.experience,
      education: data.education,
      certifications: data.certifications,
      skills: {
        create: data.skills,
      },
    },
    include: {
      profile: true,
      skills: true,
    },
  });
}
