
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Info, ChevronDown, ChevronUp, Search } from 'lucide-react';

// Import images
import adityaImg from '/aditya.jpeg';
import mithilImg from '/Mithil.jpeg';
import antonyImg from '/Antony.jpeg';
import aryanImg from '/Aryan.jpeg';
import visakhImg from '/Visakh.jpeg';
import abhijayImg from '/AbhijayPrakash.jpeg'
// import rajeev from '/Ranjeev.jpeg';
import ak from '/Anandu.jpg';


// Executives data
const executives = [
  // {
  //   name: 'Antony Agustine',
  //   title: 'CEO',
  //   image: rajeev,
  //   path: '/members/antonyagustine'
  // },
  // {
  //   name: 'Rajeev Martin',
  //   title: 'CFO',
  //   image: rajeev,
  //   path: '/members/rajeevmartin'
  // },
  // {
  //   name: 'Mithil',
  //   title: 'COO',
  //   image: mithilImg,
  //   path: '/members/mithil'
  // },
  // {
  //   name: 'Anantha Krishnan',
  //   title: 'CTO',
  //   image: ak,
  //   path: '/members/ananthakrishnan'
  // },
  {
    name: 'Adithya Vijay',
    title: 'CAO',
    image: adityaImg,
    path: '/members/adithyavijay'
  },
  {
    name: 'Abhijay Prakash',
    title: 'CSO',
    image: abhijayImg,
    path: '/members/abhijayPrakash'
  },

  {
    name: 'Aryan Soji',
    title: 'CDO',
    image: aryanImg,
    path: '/members/aryansoji'
  },
  {
    name: 'Antony Agnel',
    title: 'CHO',
    image: antonyImg,
    path: '/members/antony'
  },
  
];

const collegeMembers = [
  {
    collegeName: "CET",
    members: [
      { name: "Sebastin Varghese", role: "", image: null, path: '/members/sebastinVarghese' },
      { name: "Saranya Ramadasan", role: "Student Representative", image: '/Saranya.png', path: '/members/saranya' },
    ]
  },
  {
    collegeName: "Muthoot Institute of Science and Technology",
    members: [
      { name: "Amal Biju", role: "Student Representative", image: '/Amall.png', path: '/members/amalBiju' },
      { name: "Jane Smith", role: "Technical Head", image: null, path: '/members/jane' },
      { name: "Mike Johnson", role: "Event Coordinator", image: null, path: '/members/mike' },
    ]
  },
  {
    collegeName: "Model Engineering College",
    members: [
      { name: "Rohit", role: "", image: '/Rohit.png', path: '/members/rohit' },
      { name: "Saketh S Pai", role: "CDO", image: '/Saketh.jpeg', path: '/members/sakethSPai' },
      { name: "Evin Joseph", role: "CAO", image: '/evin.jpeg', path: '/members/evin-joseph' },
      { name: "Dhananjaynath K J", role: "CSO", image: '/Dhnan.jpeg', path: '/members/DhananjaynathKJ' },
      { name: "ALEXANDER BIIJU ISSAC", role: "CHO", image: '/alexander.jpeg', path: '/members/alexander' },
      { name: "Aravind", role: "XPayBack & Lemont representative", image: '/aravind.jpeg', path: '/members/aravind' },
      { name: "Hussain", role: "", image: '/hussain.jpeg', path: '/members/hussain' },

    ]
  },
  {
    collegeName: "CUSAT",
    members: [
      { name: "Sadhnan Shameem", role: "Student Representative", image: '/Sadhnan.jpeg', path: '/members/sadhnanSamsudheen' },
      { name: "Vishak", role: "CAO", image: '/Visakh.jpeg', path: '/members/vishak' },
      { name: "Shahil", role: "CSO", image: '/shahil.png', path: '/members/shahil' },
      { name: "Midhun", role: "CDO", image: '/midhun.png', path: '/members/midhun' },
      { name: "hazeem", role: "CHO", image: null, path: '/members/hazeem' },
      { name: "Devasurya", role: "CHO", image: '/devasurya.png', path: '/members/hazeem' },



    ]
  },
  {
    collegeName: "TOCH",
    members: [
      { name: "Abel Kurian", role: "Student Representative", image: '/Abel.png', path: '/members/abel' }
    ]
  },
  {
    collegeName: "FISAT",
    members: [
      { name: "Austen Manavalan", role: "", image: null, path: '/members/austenManavalan' }
    ]
  },
  {
    collegeName: "NIT",
    members: [
      { name: "Mohit Tyagi", role: "", image: null, path: '/members/mohitTyagi' }
    ]
  },
  {
    collegeName: "ADISHANKARA",
    members: [
      { name: "Aryan Soji", role: "", image: null, path: '/members/aryanSoji' }
    ]
  },
  {
    collegeName: "St Teresa's",
    members: [
      { name: "Amirtha A Nair", role: "Student Representative", image: '/amirtha.png', path: '/members/Amirtha' },
    ]
  },
  {
    collegeName: "Chennai",
    members: [
      { name: "Parvathi Mohan", role: "Student Representative", image: '/parvathi.jpg', path: '/members/Amirtha' },
    ]
  },
  {
    collegeName: "TKM",
    members: [
      { name: "Sudeep Sunil", role: "", image: null, path: '/members/sudeepSunil' }
    ]
  },
  {
    collegeName: "NIT Bhopal",
    members: [
      { name: "Donal Jose", role: "", image: null, path: '/members/donalJose' }
    ]
  },
  {
    collegeName: "VIT",
    members: [
      { name: "Anjala", role: "", image: null, path: '/members/anjala' }
    ]
  },
  {
    collegeName: "CHRIST",
    members: [
      { name: "Joyal", role: "", image: null, path: '/members/joyal' }
    ]
  },
  {
    collegeName: "Brototype",
    members: [
      { name: "Donjo", role: "Student Representative", image: '/donjo.png', path: '/members/donjo' }
    ]
  },
  {
    collegeName: "GEC Thrissur",
    members: [
      { name: "Joshika", role: "", image: null, path: '/members/joshika' }
    ]
  },
  {
    collegeName: "Sales",
    members: [
      { name: "Akshay BU", role: "sales men", image: '/Akshay.png', path: '/members/austenManavalan' }
    ]
  },
  {
    collegeName: "KARUNYA",
    members: [
      { name: "Nikhil Varghese", role: "", image: null, path: '/members/nikhilVarghese' }
    ]
  },
  {
    collegeName: "Cannada",
    members: [
      { name: "Livin george", role: "", image: '/livin.png', path: '/members/nikhilVarghese' },
      { name: "david", role: "", image: null, path: '/members/nikhilVarghese' }

    ]
  },
  {
    collegeName: "Depaul",
    members: [
      { name: "Blesson", role: "", image: '/blesson.png', path: '/members/blesson' }
    ]
  },
  {
    collegeName: "german",
    members: [
      { name: "dohal jose", role: "", image: null, path: '/members/blesson' }
    ]
  },
  {
    collegeName: "MA kothemagalem",
    members: [
      { name: "Ujal", role: "Student Representative", image: '/ujal.png', path: '/members/ujal' }
    ]
  }
];

const ProfileCard = ({ name, title, role, image, path }) => (
  <div className="bg-slate-50 rounded-3xl py-16 p-6 flex flex-col items-center space-y-4 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
    <div className="w-32 h-32 rounded-full bg-slate-200 border-2 border-slate-300 overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
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
    <Link
      to={path}
      className="rounded-full p-4 hover:bg-slate-200 transition-colors group"
    >
      <Info className="w-10 h-10 text-black group-hover:text-blue-500 transition-colors" />
    </Link>
  </div>
);

const FirstMember = ({ name, title, role, image, path }) => (
  <div className="bg-slate-50 rounded-xl py-8 px-4 flex flex-col items-center space-y-2 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
    <div className="w-20 h-20 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
      {image ? (
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-12 h-12 text-slate-400">
            <path
              fill="currentColor"
              d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8zm2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3H8z"
            />
          </svg>
        </div>
      )}
    </div>
    <div className="text-center">
      <h3 className="font-semibold text-black text-lg mb-0.5">{name}</h3>
      <p className="text-sm text-slate-600">{title || role}</p>
    </div>
    <Link
      to={path}
      className="rounded-full p-2 hover:bg-slate-200 transition-colors group"
    >
      <Info className="w-6 h-6 text-black group-hover:text-blue-500 transition-colors" />
    </Link>
  </div>
);



const MembersList = ({ college, isOpen, onToggle }) => {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden mb-4 w-4/5 mx-auto">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-slate-700 transition-colors"
      >
        {/* Flex container for college name and first member */}
        <div className="flex w-full justify-between items-center">
          {/* College Name on the Left */}
          <h3 className="text-xl font-semibold text-white">
            {college.collegeName}
          </h3>
          
          {/* First Member ProfileCard on the Right */}
          {!isOpen && (
            <div className="w-1/3">
              <FirstMember key={college.collegeName} {...college.members[0]} />
            </div>
          )}
        </div>
        
        {/* Toggle Icon */}
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-slate-300" />
        ) : (
          <ChevronDown className="w-6 h-6 text-slate-300" />
        )}
      </button>
      
      {/* Display all members when expanded */}
      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-slate-700">
          {college.members.map((member, index) => (
            <ProfileCard key={`${college.collegeName}-${index}`} {...member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function ExecutivesDisplay() {
  const [searchTerm, setSearchTerm] = useState('');
  const [openColleges, setOpenColleges] = useState({});

  const toggleCollege = (collegeName) => {
    setOpenColleges(prev => ({
      ...prev,
      [collegeName]: !prev[collegeName]
    }));
  };

  const filteredColleges = collegeMembers.filter(college => {
    const collegeNameMatch = college.collegeName.toLowerCase().includes(searchTerm.toLowerCase());
    const membersMatch = college.members.some(member => 
      member.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return collegeNameMatch || membersMatch;
  });

  return (
    <div className="min-h-screen bg-slate-900 p-8">
      <div className="space-y-20">
        {/* Executives Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4 mt-14">
            <h1 className="text-5xl font-bold text-blue-400 mb-2">
            Chief Executives
            </h1>
            {/* <h2 className="text-4xl font-semibold text-slate-300">
              TOP EXECUTIVES
            </h2> */}
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
            
            {/* Search Bar */}
            <div className="relative w-4/5 mx-auto mb-8">
              <input
                type="text"
                placeholder="Search colleges or members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-3 rounded-lg bg-slate-800 text-white border border-slate-600 focus:outline-none focus:border-blue-400 pl-12"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>

            {/* Colleges List */}
            <div className="space-y-4">
              
              {filteredColleges.map((college) => (
                <MembersList
                  key={college.collegeName}
                  college={college}
                  isOpen={openColleges[college.collegeName]}
                  onToggle={() => toggleCollege(college.collegeName)}
                />
              ))}


              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}