import {
  OpportunityCategory,
  OpportunityStatus,
  OpportunityType,
  UrgencyLevel,
} from "@/generated/prisma";
import { prisma } from "../prisma";

export interface OpportunityFilters {
  search?: string;
  category?: OpportunityCategory | "all";
  type?: OpportunityType;
  urgency?: UrgencyLevel;
  location?: string;
  isRemote?: boolean;
}

export async function getOpportunities(filters: OpportunityFilters = {}) {
  const { search, category, type, urgency, location, isRemote } = filters;

  const opportunities = await prisma.opportunity.findMany({
    where: {
      status: OpportunityStatus.ACTIVE,
      ...(search && {
        OR: [
          { title: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
          {
            organization: {
              organizationName: { contains: search, mode: "insensitive" },
            },
          },
        ],
      }),
      ...(category && category !== "all" && { category }),
      ...(type && { type }),
      ...(urgency && { urgency }),
      ...(location && {
        location: { contains: location, mode: "insensitive" },
      }),
      ...(isRemote !== undefined && { isRemote }),
    },
    include: {
      organization: {
        include: {
          profile: {
            select: {
              fullName: true,
              avatar: true,
            },
          },
        },
      },
      _count: {
        select: {
          applications: true,
        },
      },
    },
    orderBy: [{ urgency: "desc" }, { createdAt: "desc" }],
  });

  return opportunities.map(
    (opportunity: {
      id: any;
      title: any;
      description: any;
      category: any;
      type: any;
      urgency: any;
      skillsNeeded: any;
      timeCommitment: any;
      location: any;
      isRemote: any;
      organization: { organizationName: any; profile: { avatar: any } };
      _count: { applications: any };
      createdAt: any;
      maxVolunteers: any;
    }) => ({
      id: opportunity.id,
      title: opportunity.title,
      description: opportunity.description,
      category: opportunity.category,
      type: opportunity.type,
      urgency: opportunity.urgency,
      skillsNeeded: opportunity.skillsNeeded,
      timeCommitment: opportunity.timeCommitment,
      location: opportunity.location,
      isRemote: opportunity.isRemote,
      organizationName: opportunity.organization.organizationName,
      organizationAvatar: opportunity.organization.profile.avatar,
      applicants: opportunity._count.applications,
      postedDate: opportunity.createdAt,
      maxVolunteers: opportunity.maxVolunteers,
    })
  );
}

export async function getOpportunityById(id: string) {
  return await prisma.opportunity.findUnique({
    where: { id },
    include: {
      organization: {
        include: {
          profile: true,
        },
      },
      applications: {
        include: {
          volunteer: {
            include: {
              profile: true,
            },
          },
        },
      },
      assignments: {
        include: {
          volunteer: {
            include: {
              profile: true,
            },
          },
        },
      },
    },
  });
}

export async function createOpportunity(
  organizationId: string,
  data: {
    title: string;
    description: string;
    category: OpportunityCategory;
    type: OpportunityType;
    urgency: UrgencyLevel;
    skillsNeeded: string[];
    timeCommitment: string;
    location: string;
    isRemote: boolean;
    requirements?: string;
    benefits?: string;
    startDate?: Date;
    endDate?: Date;
    maxVolunteers: number;
  }
) {
  return await prisma.opportunity.create({
    data: {
      ...data,
      organizationId,
    },
    include: {
      organization: {
        include: {
          profile: true,
        },
      },
    },
  });
}
