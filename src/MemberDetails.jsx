import React from 'react';
import IEEELogo from '/IEEE12010.png'; 

const MemberProfileSection = ({ name, title, bio, image, quote }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto mt-6 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
            <div className="flex flex-col items-center text-center">
              <div className="w-48 h-48 rounded-full bg-gray-700 overflow-hidden mb-6">
                {image ? (
                  <img src={image} alt={name} className="w-full h-full object-cover" />
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
              <h2 className="text-3xl font-bold mb-2">{name}</h2>
              <h3 className="text-xl text-gray-400 mb-6">{title}</h3>
              <p className="text-gray-300 leading-relaxed">{bio}</p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="text-5xl text-cyan-400">"</div>
                <div>
                  <p className="text-lg text-gray-300 mb-4">{quote.text}</p>
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
                      <h4 className="font-semibold">{quote.author}</h4>
                      <p className="text-sm text-gray-400">{quote.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-3xl p-8 border border-gray-700">
              <h3 className="text-xl font-semibold mb-6">ORGANIZATION CURRENTLY VOLUNTEERING</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((index) => (
                  <div key={index} className="bg-white p-4 rounded-xl">
                    <img 
                      src={IEEELogo} 
                      alt="IEEE Logo" 
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfileSection;