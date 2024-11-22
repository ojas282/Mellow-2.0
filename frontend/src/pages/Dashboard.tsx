import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import EventPost from '../components/EventPost';
import SuggestedBuddies from '../components/SuggestedBuddies';
import { PlusCircle, Bell } from 'lucide-react';


const eventsFeed = [
  {
    id: 1,
    title: "Weekend Hiking Adventure",
    host: "Sarah Parker",
    date: "Mar 25, 2024",
    time: "9:00 AM",
    location: "Mountain Trail Park",
    attendees: 15,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
  },
  {
    id: 2,
    title: "Tech Meetup 2024",
    host: "John Developer",
    date: "Mar 28, 2024",
    time: "6:00 PM",
    location: "Innovation Hub",
    attendees: 45,
    category: "Technology",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  }
];

// Mock data for chat groups
const chatGroups = [
  {
    id: 1,
    name: "Hiking Enthusiasts",
    lastMessage: "See you all tomorrow!",
    unreadCount: 3,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306",
  },
  {
    id: 2,
    name: "Tech Meetup Group",
    lastMessage: "Great discussion everyone!",
    unreadCount: 1,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
  }
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Events Feed Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Create Event Button */}
          <button
            onClick={() => navigate('/create-event')}
            className="w-full bg-white rounded-lg shadow p-4 flex items-center justify-center space-x-2 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
          >
            <PlusCircle className="h-6 w-6 text-primary-600" />
            <span className="text-lg font-medium text-gray-700">Create New Event</span>
          </button>

          {/* Events Feed */}
          {eventsFeed.map((event) => (
            <EventPost key={event.id} {...event} />
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Community Chats */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Community Chats</h2>
              <Bell className="h-5 w-5 text-gray-500" />
            </div>
            <div className="space-y-4">
              {chatGroups.map((group) => (
                <div
                  key={group.id}
                  className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200"
                >
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{group.name}</h3>
                    <p className="text-sm text-gray-500">{group.lastMessage}</p>
                  </div>
                  {group.unreadCount > 0 && (
                    <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full">
                      {group.unreadCount}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Suggested Buddies */}
          <SuggestedBuddies />
        </div>
      </div>
    </DashboardLayout>
  );
}