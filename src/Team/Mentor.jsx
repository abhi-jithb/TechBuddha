import React from 'react';
import { Calendar, Mail, Share2, Award, BookOpen, Star, Linkedin } from 'lucide-react';

const MentorProfile = () => {
  const mentor = {
    name: 'Jacob George',
    title: 'App Development Mentor',
    image: '/Jacob.jpg',
    expertise: 'Mobile & Web Apps',
    experience: '8+ years',
    description: 'Specializes in React Native and Flutter development with a passion for creating intuitive and efficient mobile applications. Jacob has a track record of mentoring developers and helping them achieve their full potential in the world of app development.',
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
    },
    rating: 4.9,
    linkedinUrl: 'https://www.linkedin.com/in/jacobgeorgea?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    quote: {
      text: "Jacob's mentorship was instrumental in helping me transition from web to mobile development. His expertise and patient guidance made the learning process both enjoyable and highly effective.",
      author: "Agustine Vakumcheri",
      role: "Chief Executive Officer"
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto mt-6 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-gray-700 overflow-hidden mb-6">
                {mentor.image ? (
                  <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-32 h-32 text-gray-600">
                      <path
                        fill="currentColor"
                        d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <h2 className="text-3xl font-bold mb-2">{mentor.name}</h2>
              <h3 className="text-xl text-gray-400 mb-2">{mentor.title}</h3>
              <div className="flex items-center gap-2 text-yellow-400 mb-4">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-semibold">{mentor.rating}</span>
              </div>
              {mentor.linkedinUrl && (
                <a
                  href={mentor.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </a>
              )}
              <p className="text-gray-300 leading-relaxed mb-6">{mentor.description}</p>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                  <Mail className="w-5 h-5" />
                  Contact
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors font-semibold text-gray-300">
                  <Share2 className="w-5 h-5" />
                  Share Profile
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="text-5xl text-cyan-400">"</div>
                <div>
                  <p className="text-lg text-gray-300 mb-4">{mentor.quote.text}</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-600">
                          <path
                            fill="currentColor"
                            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{mentor.quote.author}</h4>
                      <p className="text-sm text-gray-400">{mentor.quote.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Award className="w-6 h-6 text-cyan-400" />
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {mentor.highlights.map((highlight, index) => (
                  <div key={index} className="bg-gray-700/50 p-4 rounded-xl">
                    <span className="text-cyan-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-cyan-400" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {mentor.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 bg-gray-700/50 text-cyan-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-cyan-400" />
                Availability
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-cyan-300 mb-2">Days Available</h4>
                  <p className="text-gray-300">{mentor.schedule.availability}</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-xl">
                  <h4 className="font-semibold text-cyan-300 mb-2">Time Slots</h4>
                  <p className="text-gray-300">{mentor.schedule.timeSlots}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;