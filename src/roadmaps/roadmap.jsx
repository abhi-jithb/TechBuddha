import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { BookOpen, Server, Database, Rocket, Youtube } from 'lucide-react';

const LearningRoadmap = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  
  const roadmapData = [
    {
      id: 'frontend',
      title: 'Frontend Development - React',
      duration: '2-3 months',
      icon: BookOpen,
      color: 'from-purple-500 to-blue-500',
      topics: [
        'JavaScript fundamentals & ES6+',
        'React components, props & JSX',
        'React Hooks & State Management',
       
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development - Node.js',
      duration: '2-3 months',
      icon: Server,
      color: 'from-blue-500 to-cyan-500',
      topics: [
        'Node.js core concepts & modules',
        'Express.js & middleware patterns',
        'RESTful API design principles',
        'Authentication & Authorization',
        'Error handling & logging'
      ]
    },
    {
      id: 'database',
      title: 'Database - MongoDB',
      duration: '1-2 months',
      icon: Database,
      color: 'from-cyan-500 to-green-500',
      topics: [
        'MongoDB architecture & concepts',
        'Schema design & validation',
        'CRUD operations & aggregation',
        'Indexing & query optimization',
        'Data modeling best practices'
      ]
    },
    {
      id: 'deployment',
      title: 'Deployment & DevOps',
      duration: '1 month',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
      topics: [
        'CI/CD pipeline setup',
        'Docker containerization',
        'Cloud deployment (AWS/Heroku)',
        'Performance monitoring',
        'Security best practices'
      ]
    }
  ];



    roadmapData.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <testimonialsiv className="w-full min-h-screen bg-gratestimonialsient-to-b pt-32 from-gray-900 to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 
          to-purple-400 bg-clip-text text-transparent">
          Full Stack Development Roadmap
        </h1>
        
        <div className="relative">
          {/* SVG Path */}
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1200" 
            style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4f46e5">
                  <animate
                    attributeName="stop-color"
                    values="#4f46e5;#06b6d4;#4f46e5"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#06b6d4">
                  <animate
                    attributeName="stop-color"
                    values="#06b6d4;#4f46e5;#06b6d4"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
              
              {/* Dotted pattern for the road */}
              <pattern id="roadPattern" x="0" y="0" width="20" height="20" 
                patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="2" fill="#ffffff" fillOpacity="0.3" />
              </pattern>
            </defs>

            {/* Main curved road path */}
            <path
              d="M 100,100 
                 C 300,100 400,200 400,300
                 S 300,500 500,600
                 S 700,700 700,800
                 S 500,900 300,1000"
              fill="none"
              stroke="url(#roadGradient)"
              strokeWidth="40"
              strokeLinecap="round"
              className="road-path"
            />
            
            {/* Road overlay with dots */}
            <path
              d="M 100,100 
                 C 300,100 400,200 400,300
                 S 300,500 500,600
                 S 700,700 700,800
                 S 500,900 300,1000"
              fill="none"
              stroke="url(#roadPattern)"
              strokeWidth="40"
              strokeLinecap="round"
              className="road-dots"
            />

            {/* Milestone circles */}
            {roadmapData.map((_, index) => {
              const y = 200 + (index * 250);
              const x = index % 2 === 0 ? 400 : 600;
              return (
                <g key={`milestone-${index}`}>
                  {/* Outer circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r="40"
                    fill="#1e293b"
                    stroke="url(#roadGradient)"
                    strokeWidth="4"
                    className="milestone-circle"
                  />
                  {/* Inner circle with pulse animation */}
                  <circle
                    cx={x}
                    cy={y}
                    r="30"
                    fill="url(#roadGradient)"
                    className="milestone-inner"
                  >
                    <animate
                      attributeName="r"
                      values="25;30;25"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Content cards */}
          <div className="relative z-10 pt-24">
            {roadmapData.map((section, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className={`transform transition-all duration-1000 mb-48
                    ${visibleSections.includes(section.id)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                    }
                    ${isEven ? 'ml-0 mr-auto' : 'ml-auto mr-0'}
                    max-w-lg`}
                >
                  <Card className="p-6 bg-gray-800/90 backdrop-blur border-gray-700">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-xl 
                        bg-gradient-to-r ${section.color} flex items-center justify-center`}>
                        <section.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {section.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          Duration: {section.duration}
                        </p>
                        <ul className="space-y-2">
                          {section.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    
     
    </testimonialsiv>
  );
};

export default LearningRoadmap;