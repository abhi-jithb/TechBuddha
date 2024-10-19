import React from 'react';
import { Calendar, Mail, Share2, Award, BookOpen } from 'lucide-react';

const MentorProfile = () => {
  const mentor = {
    name: 'Jacob George',
    title: 'App Development Mentor',
    image: '/mentor-image.jpg',
    expertise: 'Mobile & Web Apps',
    experience: '8+ years',
    description: 'Specializes in React Native and Flutter development',
    highlights: [
      'Mobile App Development Expert',
      'Full Stack Development',
      'Cross-Platform Solutions',
      'Technical Architecture',
      'UI/UX Implementation'
    ],
    technologies: [
      'React Native',
      'Flutter',
      'JavaScript/TypeScript',
      'Node.js',
      'REST APIs',
      'Mobile UI Frameworks'
    ],
    schedule: {
      availability: 'Monday - Friday',
      timeSlots: '2:00 PM - 6:00 PM EST'
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
          <img
            src={mentor.image}
            alt={mentor.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="flex-grow">
          <h1 className="text-3xl font-bold mb-2">{mentor.name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{mentor.title}</h2>
          
          <div className="flex gap-4 mb-4">
            <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
              {mentor.expertise}
            </span>
            <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
              {mentor.experience}
            </span>
          </div>
          
          <p className="text-gray-700 mb-4">{mentor.description}</p>
          
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <Mail className="w-4 h-4" />
              Contact
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Share2 className="w-4 h-4" />
              Share Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Expertise & Skills */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Award className="w-5 h-5" />
              Areas of Expertise
            </h3>
          </div>
          <div className="space-y-2">
            <ul className="space-y-2">
              {mentor.highlights.map((highlight, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technologies */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Technologies
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {mentor.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
          <div className="mb-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Availability
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-gray-700">Days Available</h4>
              <p>{mentor.schedule.availability}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700">Time Slots</h4>
              <p>{mentor.schedule.timeSlots}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;