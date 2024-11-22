import React from 'react';
import { Calendar, MapPin, Users, X } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';

const joinedEvents = [
  {
    id: 1,
    title: "Tech Meetup 2024",
    host: "Sarah Parker",
    date: "Mar 28, 2024",
    location: "Innovation Hub",
    attendees: 45,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  },
  {
    id: 2,
    title: "Local Music Festival",
    host: "Mike Johnson",
    date: "Apr 15, 2024",
    location: "Central Park",
    attendees: 120,
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
  }
];

export default function JoinedEvents() {
  const handleLeaveEvent = (eventId: number) => {
    // Handle leave event logic
    console.log('Leaving event:', eventId);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Your Joined Events</h1>
        <div className="space-y-6">
          {joinedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="flex">
                <div className="w-48 h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                      <p className="text-gray-600 mb-3">Hosted by {event.host}</p>
                    </div>
                    <button
                      onClick={() => handleLeaveEvent(event.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-primary-500" />
                      {event.attendees} attending
                    </div>
                  </div>
                  <button
                    onClick={() => handleLeaveEvent(event.id)}
                    className="mt-4 px-4 py-2 text-red-600 border border-red-600 rounded-full hover:bg-red-50 transition-colors"
                  >
                    Leave Event
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}