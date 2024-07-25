import { TicketCards } from "@/components/component/ticket-cards";
import prisma from "@/lib/db";

export default async function Home() {
  const tickets = await prisma.ticket.findMany();
  return <TicketCards tickets={tickets} />;
}
