import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface EventPostProps {
  id: number;
  title: string;
  host: string;
  date: string;
  time?: string;
  location: string;
  attendees: number;
  category: string;
  image: string;
}

export default function EventPost({
  title,
  host,
  date,
  time,
  location,
  attendees,
  category,
  image
}: EventPostProps) {
  const [isRegistered, setIsRegistered] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleRegisterClick = () => {
    setShowPopup(true);
  };


  const handleConfirmRegistration = () => {
    setIsRegistered(true);
    setShowPopup(false);
  };

  const handleCancelRegistration = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-purple-700 text-white px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
            <p className="text-gray-600">Hosted by {host}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-5 w-5 mr-2 text-primary-500" />
            <span>{date}</span>
            {time && (
              <>
                <Clock className="h-5 w-5 ml-4 mr-2 text-primary-500" />
                <span>{time}</span>
              </>
            )}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5 mr-2 text-primary-500" />
            <span>{location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2 text-primary-500" />
            <span>{attendees} attending</span>
          </div>
        </div>


        <button
          onClick={handleRegisterClick}
          className={`w-full py-2 rounded-full transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${isRegistered ? 'bg-green-600 text-white' : 'bg-purple-600 text-white'
            } hover:${isRegistered ? 'bg-green-700' : 'bg-primary-700'} hover:scale-105`}
        >
          {isRegistered ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Registered!
            </span>
          ) : (
            'Register Now'
          )}
        </button>
      </div>


      {showPopup && !isRegistered && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Are you sure you want to register and attend this event?</h3>
            <div className="flex justify-between">
              <button
                onClick={handleConfirmRegistration}
                className="bg-green-600 text-white px-10 py-2 rounded-full hover:bg-green-700 focus:outline-none"
              >
                Yes
              </button>
              <button
                onClick={handleCancelRegistration}
                className="bg-red-600 text-white px-10 py-2 rounded-full hover:bg-red-700 focus:outline-none"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}