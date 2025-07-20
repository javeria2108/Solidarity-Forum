// prisma/seed.ts
import {
  PrismaClient,
  UserType,
  OpportunityCategory,
  OpportunityType,
  UrgencyLevel,
} from "../src/generated/prisma";
import { faker } from "@faker-js/faker";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ---- 1. Create Organization Profile + Organization ----
  const orgProfileId = randomUUID();
  const orgProfile = await prisma.profile.create({
    data: {
      id: orgProfileId,
      email: faker.internet.email(),
      fullName: faker.company.name(),
      userType: UserType.ORGANIZATION,
      verified: true,
    },
  });

  const organization = await prisma.organization.create({
    data: {
      profileId: orgProfileId,
      organizationName: faker.company.name(),
      organizationType: "NGO",
      description: faker.company.catchPhrase(),
      focusAreas: ["EDUCATION", "HEALTH"],
      operatingRegions: ["India", "Nepal"],
    },
  });

  // ---- 2. Create Volunteer Profile + Volunteer ----
  const volProfileId = randomUUID();
  const volProfile = await prisma.profile.create({
    data: {
      id: volProfileId,
      email: faker.internet.email(),
      fullName: faker.person.fullName(),
      userType: UserType.VOLUNTEER,
      verified: true,
    },
  });

  const volunteer = await prisma.volunteer.create({
    data: {
      profileId: volProfileId,
      languages: ["English", "Hindi"],
      experience: "2 years in disaster relief",
      certifications: ["CPR", "First Aid"],
      education: "Bachelor of Social Work",
    },
  });

  // ---- 3. Add Skills and Availability to Volunteer ----
  await prisma.volunteerSkill.createMany({
    data: [
      {
        volunteerId: volunteer.id,
        category: "MEDICAL",
        name: "First Aid",
        level: "INTERMEDIATE",
      },
      {
        volunteerId: volunteer.id,
        category: "LOGISTICS",
        name: "Supply Chain",
        level: "BEGINNER",
      },
    ],
  });

  await prisma.volunteerAvailability.createMany({
    data: [
      {
        volunteerId: volunteer.id,
        dayOfWeek: 1,
        startTime: "09:00",
        endTime: "13:00",
        timezone: "Asia/Kolkata",
      },
      {
        volunteerId: volunteer.id,
        dayOfWeek: 3,
        startTime: "14:00",
        endTime: "18:00",
        timezone: "Asia/Kolkata",
      },
    ],
  });

  // ---- 4. Create Opportunity ----
  const opportunity = await prisma.opportunity.create({
    data: {
      organizationId: organization.id,
      title: "Remote Tutor for Refugee Children",
      description: "Help educate children affected by conflict remotely.",
      category: OpportunityCategory.EDUCATION,
      type: OpportunityType.REMOTE,
      urgency: UrgencyLevel.HIGH,
      skillsNeeded: ["Teaching", "Communication"],
      timeCommitment: "5 hours/week",
      location: "Online",
      isRemote: true,
    },
  });

  // ---- 5. Create Application and Assignment ----
  const application = await prisma.application.create({
    data: {
      opportunityId: opportunity.id,
      volunteerId: volunteer.id,
      organizationId: organization.id,
      coverLetter: "I am passionate about helping children in need.",
    },
  });

  await prisma.assignment.create({
    data: {
      applicationId: application.id,
      opportunityId: opportunity.id,
      volunteerId: volunteer.id,
      organizationId: organization.id,
    },
  });

  console.log("✅ Database has been seeded.");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
