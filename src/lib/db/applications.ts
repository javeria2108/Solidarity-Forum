// // lib/db/applications.ts
// import { prisma } from './index';
// import { ApplicationStatus } from '@prisma/client';

// export async function createApplication(data: {
//   opportunityId: string;
//   volunteerId: string;
//   organizationId: string;
//   coverLetter?: string;
// }) {
//   return await prisma.application.create({
//     data,
//     include: {
//       opportunity: {
//         include: {
//           organization: {
//             include: {
//               profile: true
//             }
//           }
//         }
//       },
//       volunteer: {
//         include: {
//           profile: true
//         }
//       }
//     }
//   });
// }

// export async function updateApplicationStatus(applicationId: string, status: ApplicationStatus) {
//   return await prisma.application.update({
//     where: { id: applicationId },
//     data: {
//       status,
//       reviewedAt: new Date()
//     },
//     include: {
//       opportunity: true,
//       volunteer: {
//         include: {
//           profile: true
//         }
//       }
//     }
//   });
// }

// export async function getApplicationsByVolunteer(volunteerId: string) {
//   return await prisma.application.findMany({
//     where: { volunteerId },
//     include: {
//       opportunity: {
//         include: {
//           organization: {
//             include: {
//               profile: true
//             }
//           }
//         }
//       }
//     },
//     orderBy: { appliedAt: 'desc' }
//   });
// }

// export async function getApplicationsByOrganization(organizationId: string) {
//   return await prisma.application.findMany({
//     where: { organizationId },
//     include: {
//       opportunity: true,
//       volunteer: {
//         include: {
//           profile: true,
//           skills: true
//         }
//       }
//     },
//     orderBy: { appliedAt: 'desc' }
//   });
// }
