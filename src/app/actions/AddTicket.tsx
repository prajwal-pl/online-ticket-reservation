"use server";

import { Ticket } from "@prisma/client";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export default async function AddTicket(name: string, description: string) {
  const ticket = await prisma.ticket
    .create({
      data: {
        name,
        description,
      },
    })
    .then(() => {
      revalidatePath("/");
    });
  return ticket;
}

export async function setSold({ id }: { id: string }) {
  const ticket = await prisma.ticket.findFirst({
    where: {
      id,
    },
  });
  if (ticket) {
    await prisma.ticket.update({
      where: {
        id,
      },
      data: {
        isSold: true,
      },
    });
    revalidatePath("/");
  }
}
