
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, ChevronDown, ChevronUp, Search } from 'lucide-react';

import adityaImg from '/aditya.jpeg';
import mithilImg from '/Mithil.jpeg';
import antonyImg from '/Antony.jpeg';
import aryanImg from '/Aryan.jpeg';
import visakhImg from '/Visakh.jpeg';
import abhijayImg from '/AbhijayPrakash.jpeg';
import ak from '/Anandu.jpg';

const executives = [
  {
    name: 'Adithya Vijay',
    title: 'CAO',
    imageUrl: adityaImg,
    path: '/members/adithyavijay'
  },
  {
    name: 'Abhijay Prakash',
    title: 'CSO',
    imageUrl: abhijayImg,
    path: '/members/abhijayPrakash'
  },
  {
    name: 'Aryan Soji',
    title: 'CDO',
    imageUrl: aryanImg,
    path: '/members/aryansoji'
  },
  {
    name: 'Antony Agnel',
    title: 'CHO',
    imageUrl: antonyImg,
    path: '/members/antony'
  },
];

const ProfileCard = ({ name, title, role, imageUrl, path }) => (
  <div className="bg-slate-50 rounded-3xl py-16 p-6 flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
    <div className="w-32 h-32 rounded-full bg-slate-200 border-2 border-slate-300 overflow-hidden">
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-24 h-24 text-slate-400">
            <path
              fill="currentColor"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z"
            />
          </svg>
        </div>
      )}
    </div>
    <div className="text-center">
      <h3 className="font-bold text-black text-xl mb-1">{name}</h3>
      <p className="text-lg text-slate-600">{title || role}</p>
    </div>
    <Link to={path} className="rounded-full p-4 hover:bg-slate-200 transition-colors group">
      <Info className="w-10 h-10 text-black group-hover:text-blue-500 transition-colors" />
    </Link>
  </div>
);

const CollegeSection = ({ college, isOpen, onToggle }) => (
  <div className="bg-slate-800 rounded-lg overflow-hidden mb-6">
    <button
      onClick={onToggle}
      className="w-full px-8 py-6 flex justify-between items-center hover:bg-slate-700 transition-colors"
    >
      <h3 className="text-2xl font-semibold text-white">{college.collegename}</h3>
      {isOpen ? (
        <ChevronUp className="w-8 h-8 text-slate-300" />
      ) : (
        <ChevronDown className="w-8 h-8 text-slate-300" />
      )}
    </button>
    
    {isOpen && (
      <div className="p-8 bg-slate-700">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {college.members?.map((member, index) => (
            <ProfileCard
              key={index}
              name={member.fullname}
              role={member.currentPositions?.[0]}
              imageUrl={member.imageUrl}
              path={`/members/${member.fullname.toLowerCase().replace(/\s+/g, '-')}`}
            />
          ))}
        </div>
      </div>
    )}
  </div>
);

const CategoryFilter = ({ activeFilter, onFilterChange }) => {
  const categories = ['college', 'development', 'marketing', 'job'];
  
  return (
    <div className="flex justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeFilter === category
              ? 'bg-blue-500 text-white shadow-lg'
              : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
          }`}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default function ExecutivesDisplay() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('college');
  const [openColleges, setOpenColleges] = useState({});
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:4000/members');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setMembers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const toggleCollege = (collegeId) => {
    setOpenColleges(prev => ({
      ...prev,
      [collegeId]: !prev[collegeId]
    }));
  };

  const filteredMembers = members.filter(member => {
    if (!member) return false;
    
    const matchesSearch = 
      (member.fullname?.toLowerCase().includes(searchTerm.toLowerCase()) ||
       member.collegename?.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch && member.userType === activeFilter;
  });

  // Group colleges and their members
  const colleges = activeFilter === 'college' 
    ? filteredMembers.reduce((acc, member) => {
        if (member.collegename) {
          if (!acc[member.collegename]) {
            acc[member.collegename] = {
              collegename: member.collegename,
              members: []
            };
          }
          if (member.members) {
            acc[member.collegename].members = member.members;
          }
        }
        return acc;
      }, {})
    : {};

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="space-y-20">
        {/* Executives Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4 mt-14">
            <h1 className="text-5xl font-bold text-blue-400 mb-2">
              Chief Executives
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-12">
            {executives.map((exec, index) => (
              <ProfileCard key={index} {...exec} />
            ))}
          </div>
        </div>

        {/* Members Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-4xl font-semibold text-slate-300 mb-8">
              MEMBERS
            </h2>
            
            <CategoryFilter 
              activeFilter={activeFilter} 
              onFilterChange={setActiveFilter}
            />
            
            <div className="relative w-4/5 mx-auto mb-8">
              <input
                type="text"
                placeholder="Search members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:outline-none focus:border-blue-400 pl-12"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>

            <div className="max-w-6xl mx-auto">
              {activeFilter === 'college' ? (
                // Display colleges in expandable sections
                Object.values(colleges).map((college, index) => (
                  <CollegeSection
                    key={index}
                    college={college}
                    isOpen={openColleges[college.collegename]}
                    onToggle={() => toggleCollege(college.collegename)}
                  />
                ))
              ) : (
                // Display individual cards for other categories
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredMembers.map((member, index) => (
                    <ProfileCard
                      key={index}
                      name={member.fullname}
                      role={member.currentPositions?.[0]}
                      imageUrl={member.imageUrl}
                      path={`/members/${member.fullname.toLowerCase().replace(/\s+/g, '-')}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}