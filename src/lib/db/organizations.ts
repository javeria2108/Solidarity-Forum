// // lib/db/organizations.ts
// import { prisma } from './index';

// export async function getOrganizationProfile(profileId: string) {
//   return await prisma.organization.findUnique({
//     where: { profileId },
//     include: {
//       profile: true,
//       opportunities: {
//         include: {
//           _count: {
//             select: {
//               applications: true,
//               assignments: true
//             }
//           }
//         },
//         orderBy: { createdAt: 'desc' }
//       },
//       applications: {
//         include: {
//           opportunity: true,
//           volunteer: {
//             include: {
//               profile: true
//             }
//           }
//         },
//         orderBy: { appliedAt: 'desc' }
//       },
//       assignments: {
//         include: {
//           opportunity: true,
//           volunteer: {
//             include: {
//               profile: true
//             }
//           }
//         }
//       }
//     }
//   });
// }

// export async function getOrganizationStats(organizationId: string) {
//   const organization = await prisma.organization.findUnique({
//     where: { id: organizationId },
//     include: {
//       opportunities: true,
//       assignments: {
//         include: {
//           sessions: true
//         }
//       },
//       reviews: true
//     }
//   });

//   if (!organization) return null;

//   const totalRequests = organization.opportunities.length;
//   const activeVolunteers = organization.assignments.filter(
//     assignment => assignment.status === 'ACTIVE'
//   ).length;
//   const completedProjects = organization.assignments.filter(
//     assignment => assignment.status === 'COMPLETED'
//   ).length;
//   const averageRating = organization.reviews.length > 0
//     ? organization.reviews.reduce((sum, review) => sum + review.rating, 0) / organization.reviews.length
//     : 0;

//   return {
//     totalRequests,
//     activeVolunteers,
//     completedProjects,
//     averageRating: Number(averageRating.toFixed(1))
//   };
// }

// export async function createOrganizationProfile(profileId: string, data: {
//   organizationName: string;
//   organizationType: string;
//   registrationNumber?: string;
//   description?: string;
//   focusAreas: string[];
//   operatingRegions: string[];
// }) {
//   return await prisma.organization.create({
//     data: {
//       profileId,
//       ...data
//     },
//     include: {
//       profile: true
//     }
//   });
// }
