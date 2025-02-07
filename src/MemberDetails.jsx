import React from 'react';
import { Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { EarthCanvas } from './components';

const MemberProfileSection = ({
  name,
  currentPositions = [],
  image,
  linkedinUrl,
  skills=[],
  quotes = [],
  volunteeringOrgs = []
}) => {
  const hasQuotes = Array.isArray(quotes) && quotes.length >= 1;
  const hasVolunteeringOrgs = Array.isArray(volunteeringOrgs) && volunteeringOrgs.length > 0;
  const hasCurrentPositions = Array.isArray(currentPositions) && currentPositions.length > 0;

  return (
    <div className="bg-gradient-to-b from-gray-900 text-white py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto mt-6 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-gray-700 overflow-hidden mb-6">
                <img
                  src={image || '/placeholder.jpg'}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">{name}</h2>

              {hasCurrentPositions ? (
                <div className="space-y-1 mb-4">
                  {currentPositions.map((role, index) => (
                    <h3 key={index} className="text-xl text-gray-400">{role}</h3>
                  ))}
                </div>
              ) : null}

              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-6"
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </a>
              )}
               {skills && skills.length > 0 && (
  <div className="flex gap-2 mt-4 flex-wrap">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium"
      >
        {skill}
      </div>
    ))}
  </div>
)}

            </div>
          </div>

          <div className="space-y-8">
            {hasQuotes && (
              <div className="space-y-6">
                {quotes.map((quoteItem, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-5xl text-cyan-400">"</div>
                      <div className="flex-1">
                        <p className="text-lg text-gray-300 mb-4">
                          {quoteItem.quote}
                        </p>
                        <p className="text-sm text-gray-400 text-right italic">
                          - {quoteItem.author}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-inherit rounded-3xl p-8 "
            >
              <div className="h-[350px] md:h-[400px] xl:h-[450px] w-full">
                <EarthCanvas />
              </div>
            </motion.div>

            {hasVolunteeringOrgs && (
              <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
                <h3 className="text-xl font-semibold mb-6">
                  Organizations Currently Volunteering
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {volunteeringOrgs.map((org, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl">
                      <img src={org.logo} alt={org.name} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfileSection;