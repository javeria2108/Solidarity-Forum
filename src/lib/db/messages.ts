// lib/db/messages.ts
import { prisma } from "../prisma";

export async function createMessage(data: {
  senderId: string;
  receiverId: string;
  subject?: string;
  content: string;
}) {
  return await prisma.message.create({
    data,
    include: {
      sender: true,
      receiver: true,
    },
  });
}

export async function getMessagesByUser(userId: string) {
  return await prisma.message.findMany({
    where: {
      OR: [{ senderId: userId }, { receiverId: userId }],
    },
    include: {
      sender: true,
      receiver: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function markMessageAsRead(messageId: string) {
  return await prisma.message.update({
    where: { id: messageId },
    data: { isRead: true },
  });
}
