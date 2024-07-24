import { Button } from "@/components/ui/button";
import Link from "next/link";

export function TicketCards() {
  const tickets = [
    {
      id: 1,
      name: "VIP Concert Tickets",
      description: "Front row seats to the biggest concert of the year!",
      sold: true,
    },
    {
      id: 2,
      name: "Exclusive Art Gallery Tour",
      description: "Private tour of the new modern art exhibit.",
      sold: false,
    },
    {
      id: 3,
      name: "Luxury Spa Day Package",
      description: "Full day of pampering at the 5-star resort spa.",
      sold: true,
    },
    {
      id: 4,
      name: "Cooking Class with Celebrity Chef",
      description:
        "Learn to cook a 3-course meal from a Michelin-starred chef.",
      sold: false,
    },
    {
      id: 5,
      name: "Yacht Party Cruise",
      description: "Sunset cruise with live music and open bar.",
      sold: true,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Ticket Register</h1>
        <Link href={"/add"}>
          <Button
            variant="outline"
            className="px-4 py-2 rounded-full text-xs font-medium"
          >
            Add
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{ticket.name}</h2>
              <p className="text-gray-500 mb-4">{ticket.description}</p>
              <div className="flex justify-between items-center">
                {ticket.sold ? (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Sold
                  </span>
                ) : (
                  <Button
                    variant="outline"
                    className="px-4 py-2 rounded-full text-xs font-medium"
                  >
                    Register
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
