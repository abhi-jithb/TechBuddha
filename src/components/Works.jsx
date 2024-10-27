import React from 'react';

import agustine from '/Agustine.jpeg';
import mithil from '/Mithil.jpeg';
import antony from '/Antony.jpeg';
import aantony from '/aantony.jpeg';
import aryan from '/Aryan.jpeg';
import ak from '/Anandu.jpg'
import rajeev from '/rajajeev.png'
const TeamMember = ({ name, role, image }) => (
  <div className="rounded-3xl bg-navy-900/80 p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
    <div className="w-full h-48 rounded-lg bg-navy-800 mb-4 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <h3 className="text-white text-xl font-medium mb-2">{name}</h3>
    <p className="text-white/90">{role}</p>
  </div>
);

export default function TeamSection() {
  const members = [
    {
      name: 'Antony Augustine',
      role: 'Chief Executive Officer',
      image: aantony
    },
    {
      name: 'Rajeev Martin',
      role: 'Chief Financial Officer',
      image: rajeev
    },
    {
      name: 'Mithil',
      role: 'Chief Operation Officer',
      image: mithil
    },
    {
      name: 'Anantha Krishnan',
      role: 'Chief Technical Officer',
      image: ak
    },
  ];

  return (
    <div className="min-h-screen bg-navy-950 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white/80 text-2xl mb-4 text-center">
          Meet the Core Team
        </h1>
        <h2 className="text-6xl text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text font-bold">
          Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {members.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <a 
            href='/executives' 
            className="px-8 py-4 rounded-full bg-gray-800 text-white/90 hover:bg-navy-800/80 transition-colors hover:scale-105 transform duration-300"
          >
            Know more about our members?
          </a>
        </div>
      </div>
    </div>
  );
}