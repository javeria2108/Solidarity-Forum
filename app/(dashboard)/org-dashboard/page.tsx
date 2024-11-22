'use client';

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const eventsData = [
    { id: 1, title: "Community Clean-Up", date: "2024-10-15", location: "Central Park" },
    { id: 2, title: "Fundraising Gala", date: "2024-11-05", location: "City Hall" },
    { id: 3, title: "Food Drive", date: "2024-12-01", location: "Community Center" },
];

export default function OrgDashboard() {
    const [events, setEvents] = useState(eventsData);

    const handleDeleteEvent = (id: any) => {
        setEvents(events.filter(event => event.id !== id));
    };

    return (
        <div className=" text-black min-h-screen max-w-screen-md">
            <header className="flex justify-between items-center mb-8 max-w-screen-xl mx-auto">
                <h1 className="text-3xl font-bold">Organization Dashboard</h1>
                <Button className="bg-[#3ABC76] hover:bg-[#3ABC76CC] text-white" asChild>
                    <Link href="/create-event">Create New Event</Link>
                </Button>
            </header>

            <section className="mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
                {events.length === 0 ? (
                    <p className="text-gray-600">No events scheduled. Create a new event!</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {events.map(event => (
                            <div key={event.id} className="bg-[#705DF6] p-4 rounded-lg shadow-md text-white">
                                <h3 className="text-xl font-bold">{event.title}</h3>
                                <p>Date: {event.date}</p>
                                <p>Location: {event.location}</p>
                                <div className="flex justify-end mt-4">
                                    <Button
                                        className="bg-red-500 hover:bg-red-400 mr-2"
                                        onClick={() => handleDeleteEvent(event.id)}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        className="bg-[#3ABC76] hover:bg-[#3ABC76CC]"
                                        asChild
                                    >
                                        <Link href={`/edit-event/${event.id}`}>Edit</Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
