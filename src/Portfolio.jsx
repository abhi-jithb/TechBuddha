import React, { useState } from 'react';
import { Medal, Award, BookOpen, Trophy, ChevronRight, Microscope, Leaf, Smartphone, Factory, X } from 'lucide-react';
// import MemberProfileSection from './MemberDetails';

const AchievementsSection = () => {
  const [activeTab, setActiveTab] = useState('college');
  const [expandedCard, setExpandedCard] = useState(null);

  const startupFields = [
    { 
      id: 1, 
      title: 'MEDICAL', 
      icon: Microscope,
      description: 'Healthcare innovations and medical technology solutions',
      videoId: 'dQw4w9WgXcQ', 
      details: 'Revolutionizing healthcare through innovative medical technologies and solutions. Our medical startups focus on improving patient care and treatment outcomes.'
    },
    { 
      id: 2, 
      title: 'AGRICULTURE', 
      icon: Leaf,
      description: 'Smart farming and agricultural technology',
      videoId: 'dQw4w9WgXcQ',
      details: 'Transforming traditional farming with smart agricultural technologies. Our solutions help farmers optimize crop yields and resource efficiency.'
    },
    { 
      id: 3, 
      title: 'APP DEVELOPMENT', 
      icon: Smartphone,
      description: 'Mobile and web application development',
      videoId: 'dQw4w9WgXcQ', 
      details: 'Creating cutting-edge mobile and web applications that solve real-world problems. Our development team specializes in user-centric design and robust functionality.'
    },
    { 
      id: 4, 
      title: 'INDUSTRIAL', 
      icon: Factory,
      description: 'Industrial automation and manufacturing solutions',
      videoId: 'dQw4w9WgXcQ', 
      details: 'Advancing manufacturing processes through automation and smart industrial solutions. Were bringing Industry 4.0 innovations to traditional manufacturing.'
    }
  ];

  const educationMilestones = [
    { id: 1, label: '10th', icon: BookOpen, grade: '95%' },
    { id: 2, label: '12th', icon: Award, grade: '92%' },
    { id: 3, label: 'DIPLOMA', icon: Medal, grade: '8.9' },
    { id: 4, label: 'CURRENT', icon: Trophy, grade: '9.1' }
  ];

  const certificates = [
    { 
      id: 1, 
      title: 'Web Development',
      issuer: 'Udemy',
      date: '2024'
    },
    { 
      id: 2, 
      title: 'Cloud Computing',
      issuer: 'AWS',
      date: '2024'
    },
    { 
      id: 3, 
      title: 'Machine Learning',
      issuer: 'Coursera',
      date: '2023'
    }
  ];

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  const YouTubeEmbed = ({ videoId }) => {
    return (
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  };

  const renderStartupContent = () => {
    if (expandedCard) {
      const expandedField = startupFields.find(field => field.id === expandedCard);
      
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative animate-fadeIn">
          {/* Left side - Expanded Card */}
          <div className="rounded-xl bg-gray-800/50 border border-gray-700 p-8 transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <expandedField.icon className="w-12 h-12 text-blue-400" />
                <h3 className="text-2xl font-bold">{expandedField.title}</h3>
              </div>
              <button 
                onClick={() => setExpandedCard(null)}
                className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            <p className="text-gray-300 mb-6">{expandedField.description}</p>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-blue-400">Details</h4>
              <p className="text-gray-400 leading-relaxed">{expandedField.details}</p>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="rounded-xl bg-gray-800/50 border border-gray-700 p-6">
            <YouTubeEmbed videoId={expandedField.videoId} />
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {startupFields.map((field) => (
          <div 
            key={field.id} 
            onClick={() => handleCardClick(field.id)}
            className="rounded-xl bg-gray-800/50 border border-gray-700 p-6 hover:bg-gray-800/80 
                     transition-all duration-300 backdrop-blur-sm group cursor-pointer
                     hover:border-blue-500/50"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <field.icon className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold">{field.title}</h3>
              <p className="text-sm text-gray-400">{field.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderCollegeContent = () => (
    <div className="space-y-16 animate-fadeIn">
      {/* CGPA Card */}
      <div className="rounded-2xl bg-gray-800/50 border border-gray-700 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Current CGPA</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              9.1
            </div>
            <div className="text-gray-400">/ 10</div>
          </div>
        </div>
      </div>

      {/* Education Timeline */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {educationMilestones.map((milestone) => (
          <div 
            key={milestone.id} 
            className="rounded-xl bg-gray-800/50 border border-gray-700 p-6 hover:bg-gray-800/80 
                     transition-all duration-300 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center space-y-4">
              <milestone.icon className="w-8 h-8 text-blue-400" />
              <h3 className="text-xl font-semibold">{milestone.label}</h3>
              <div className="text-2xl font-bold text-green-400">{milestone.grade}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Certificates Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          Certifications & Workshops
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="rounded-xl bg-gray-800/50 border border-gray-700 p-6 hover:border-blue-500/50 
                       transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
                <Award className="w-8 h-8 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">{cert.title}</h3>
                <div className="text-sm text-gray-400">
                  <p>{cert.issuer}</p>
                  <p>{cert.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
    {/* <MemberProfileSection/> */}
    <div className="min-h-screen  from-gray-900  text-white p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Achievements
          </h1>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => {
                setActiveTab('college');
                setExpandedCard(null);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'college' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              College Level
            </button>
            <button 
              onClick={() => {
                setActiveTab('startup');
                setExpandedCard(null);
              }}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'startup' 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Startup Level
            </button>
          </div>
        </div>

        {activeTab === 'startup' ? renderStartupContent() : renderCollegeContent()}
      </div>
    </div>
    </>
  );
};

export default AchievementsSection;



