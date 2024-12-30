import React, { useState } from 'react';
import { Medal, Award, BookOpen, Trophy, Microscope, Leaf, Smartphone, Factory, X } from 'lucide-react';

const IconMapper = {
  BookOpen: BookOpen,
  Award: Award,
  Medal: Medal,
  Trophy: Trophy,
  Microscope: Microscope,
  Leaf: Leaf,
  Smartphone: Smartphone,
  Factory: Factory,
};
const AchievementsSection = ({ certificates }) => {
  const [activeTab, setActiveTab] = useState('college');
  const [expandedCard, setExpandedCard] = useState(null);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const hardcodedAchievements = {
    startups: [
      {
        id: 1,
        icon: 'Factory',
        title: 'Tech Startup',
        description: 'Revolutionizing AI for healthcare.',
        details: 'Developed an AI-driven platform for predictive diagnostics.',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: 2,
        icon: 'Smartphone',
        title: 'Mobile App',
        description: 'Connecting communities.',
        details: 'Created an app fostering local networking and commerce.',
        videoId: 'dQw4w9WgXcQ',
      },
    ],
    education: {
      currentCGPA: 9.2,
      milestones: [
        {
          id: 1,
          icon: 'Medal',
          label: 'Best Project',
          grade: 'A+',
        },
        {
          id: 2,
          icon: 'BookOpen',
          label: 'Research Paper',
          grade: 'A',
        },
      ],
    },
  };

  const YouTubeEmbed = ({ videoId }) => (
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

  const renderStartupContent = () => {
    if (expandedCard) {
      const expandedField = hardcodedAchievements.startups.find(
        (field) => field.id === expandedCard
      );
      const Icon = IconMapper[expandedField.icon];

      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative animate-fadeIn">
          <div className="rounded-xl bg-gray-800/50 border border-gray-700 p-8 transition-all duration-500">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <Icon className="w-12 h-12 text-blue-400" />
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
          <div className="rounded-xl bg-gray-800/50 border border-gray-700 p-6">
            <YouTubeEmbed videoId={expandedField.videoId} />
          </div>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hardcodedAchievements.startups.map((field) => {
          const Icon = IconMapper[field.icon];
          return (
            <div
              key={field.id}
              onClick={() => setExpandedCard(field.id)}
              className="rounded-xl bg-gray-800/50 border border-gray-700 p-6 hover:bg-gray-800/80 
                         transition-all duration-300 backdrop-blur-sm group cursor-pointer
                         hover:border-blue-500/50"
            >
              <div className="flex flex-col items-center space-y-4 text-center">
                <Icon className="w-12 h-12 text-blue-400 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold">{field.title}</h3>
                <p className="text-sm text-gray-400">{field.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const renderCollegeContent = () => (
    <div className="space-y-16 animate-fadeIn">
      <div className="rounded-2xl bg-gray-800/50 border border-gray-700 p-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Current CGPA</h2>
          <div className="flex justify-center items-center gap-4">
            <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              {hardcodedAchievements.education.currentCGPA}
            </div>
            <div className="text-gray-400">/ 10</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hardcodedAchievements.education.milestones.map((milestone) => {
          const Icon = IconMapper[milestone.icon];
          return (
            <div
              key={milestone.id}
              className="rounded-xl bg-gray-800/50 border border-gray-700 p-6 hover:bg-gray-800/80 
                         transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center space-y-4">
                <Icon className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-semibold">{milestone.label}</h3>
                <div className="text-2xl font-bold text-green-400">{milestone.grade}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Certifications & Workshops</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedCertificate(cert)}
              className="rounded-xl bg-gray-800/50 border border-gray-700 p-6 hover:border-blue-500/50 
                         transition-all duration-300 group cursor-pointer"
            >
              <img
                src={cert}
                alt={`Certificate ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen from-gray-900 text-white p-8 overflow-x-hidden">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-8">
          <h1 className=" text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
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

        {/* Modal */}
        {selectedCertificate && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative bg-gray-900 rounded-lg p-6 max-w-3xl w-full">
              <button
                onClick={() => setSelectedCertificate(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedCertificate}
                alt="Selected certificate"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementsSection;
