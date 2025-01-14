import React, { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div id='contact' className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0a192f] via-[#0a1525] to-[#080c1a] p-6">
      <h1 className="text-white font-light text-5xl md:text-6xl mb-16 text-center leading-tight">
        Fuel Your Goals with{' '}
        <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Beyond Innovation
        </span>
      </h1>
      
      <div className="w-full max-w-2xl px-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-1">
            <label className="text-white text-2xl font-light">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent border-b border-white/30 text-white text-xl pb-2 focus:outline-none focus:border-white/60 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-white text-2xl font-light">Phone number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border-b border-white/30 text-white text-xl pb-2 focus:outline-none focus:border-white/60 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-white text-2xl font-light">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b border-white/30 text-white text-xl pb-2 focus:outline-none focus:border-white/60 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-white text-2xl font-light">Message</label>
            <input
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent border-b border-white/30 text-white text-xl pb-2 focus:outline-none focus:border-white/60 transition-colors"
              required
            />
          </div>

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className="text-white text-2xl font-light hover:text-opacity-80 transition-colors duration-300"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}