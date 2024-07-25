"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ticket } from "@prisma/client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import AddTicket, { setSold } from "@/app/actions/AddTicket";
import { useToast } from "../ui/use-toast";
import { revalidatePath } from "next/cache";

export function TicketCards({ tickets }: { tickets: Ticket[] }) {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, description);
    AddTicket(name, description).then(() => {
      setName("");
      setDescription("");
      toast({
        title: "Ticket Added",
        description: "Your ticket has been added to the database.",
      });
    });
  };
  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold mb-6">Ticket Registration</h1>
        <Dialog>
          <DialogTrigger
            className="px-4 py-2 rounded-full text-xs font-medium bg-black
            text-white"
          >
            Add
          </DialogTrigger>
          <DialogContent className="bg-white max-w-md w-full">
            <DialogHeader>
              <DialogTitle>Add New Ticket</DialogTitle>
              <DialogDescription>
                Fill out the form to create a new support ticket.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  placeholder="Provide details about the issue"
                  className="min-h-[150px]"
                />
              </div>

              <Button
                type="submit"
                onClick={handleSubmit}
                className="w-full px-4 py-2 rounded-full text-xs font-medium bg-black text-white"
              >
                Create Ticket
              </Button>
            </form>
          </DialogContent>
        </Dialog>
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
                {ticket.isSold ? (
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Sold
                  </span>
                ) : (
                  <Button
                    onClick={() => setSold({ id: ticket.id })}
                    variant="outline"
                    className="px-4 py-2 rounded-full text-xs font-medium bg-black text-white"
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
