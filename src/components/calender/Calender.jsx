import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Function to change the month
  const changeMonth = (offset) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1));
  };

  const getFirstDayOfMonth = () => new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const getDaysInMonth = () => new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  // Generate dates for the calendar
  const generateDays = () => {
    const totalDays = getDaysInMonth();
    const firstDay = getFirstDayOfMonth();
    const daysArray = [];

    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<div key={`empty-${i}`} className="p-4"></div>);
    }

    for (let i = 1; i <= totalDays; i++) {
      daysArray.push(
        <div key={i} className="relative group p-4 border border-gray-500 rounded-lg text-center cursor-pointer bg-transparent hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 transition duration-300 ease-in-out">
          <span className="text-white font-bold">{String(i).padStart(2, "0")}</span>
          {/* Hover Indicators */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 hidden group-hover:flex space-x-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span>
            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          </div>
        </div>
      );
    }

    return daysArray;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <Navbar />
      <div className="flex-grow container mx-auto p-6 mt-14">
        {/* Calendar Header */}
        <div className="flex justify-between items-center text-xl font-bold mb-4 px-6">
          <div>
            <span className="text-4xl font-extrabold text-white">{currentDate.toLocaleString("default", { month: "short" })}</span>
            <span className="ml-2 text-lg text-gray-400">{currentDate.toLocaleString("default", { weekday: "short" })}</span>
            <span className="ml-2 text-lg text-gray-500">{currentDate.getFullYear()}</span>
          </div>
          {/* Navigation Arrows */}
          <div className="flex space-x-4">
            <button onClick={() => changeMonth(-1)} className="p-2 bg-indigo-600 rounded-full hover:bg-purple-500 transition">
              <FaChevronLeft />
            </button>
            <button onClick={() => changeMonth(1)} className="p-2 bg-indigo-600 rounded-full hover:bg-purple-500 transition">
              <FaChevronRight />
            </button>
          </div>
        </div>
        {/* Separator Bar */}
        <div className="border-b border-gray-600 mb-4"></div>
        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 bg-gray-800 p-4 rounded-lg border-violet-400">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
            <div key={day} className="font-bold text-center text-gray-300">{day}</div>
          ))}
          {generateDays()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
