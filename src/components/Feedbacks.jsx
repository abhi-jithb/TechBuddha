import React from 'react';

const TestimonialCard = ({ quote, author, role }) => (
  <div className="bg-gray-800/50 rounded-3xl p-8 backdrop-blur-sm">
    <div className="text-cyan-400 text-7xl mb-6">"</div>
    <p className="text-gray-200 text-lg mb-8 leading-relaxed">
      {quote}
    </p>
    <div className="flex items-center gap-4">
      <img 
        src="/api/placeholder/48/48" 
        alt={author} 
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h3 className="text-white font-medium text-lg">{author}</h3>
        <p className="text-gray-400">{role}</p>
      </div>
    </div>
  </div>
);

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "It is usually people in the money business, finance, and international trade that are really rich.",
      author: "Kenn Gallagher",
      role: "Founder & Leader"
    },
    {
      quote: "It is usually people in the money business, finance, and international trade that are really rich.",
      author: "Kenn Gallagher",
      role: "Founder & Leader"
    },
    {
      quote: "It is usually people in the money business, finance, and international trade that are really rich.",
      author: "Kenn Gallagher",
      role: "Founder & Leader"
    }
  ];

  return (
    <div className="min-h-screen bg-navy-950 p-8">
      <div className="max-w-7xl mx-auto"> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
          <div>
            <h2 className="text-5xl font-semibold leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                What people
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                are saying
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
                about us
              </span>
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-400 text-xl">
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
            />
          ))}
        </div>
      </div>
    </div>
  );
}