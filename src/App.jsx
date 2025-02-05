import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas } from "./components";
import ExecutivesDisplay from "./Page";
import ProfileCard from "./Portfolio";
import AchievementsSection from "./Portfolio";
import EnquiryForm from "./components/Contact";
import Footer from "./components/Footer";
import Agustine from "./Team/Agustine";
import Mithil from "./Team/Mithil";
import Aryan from "./Team/Aryan";
import Antony from "./Team/Antony";
import MentorsDisplay from "./Team/Mentor";
import UserForm from "./Pages/AddPortfolio";
import { Toaster } from "react-hot-toast";
import AchievementsForm from "./Pages/AddAchievement";
import UsersList from "./Pages/UserList";
import EditUser from "./edit/edit";
import EditAchievements from "./Pages/editAchievement";
import AdminDashboard from "./Pages/admin";
import LearningRoadmap from "./roadmaps/roadmap";
import Roadmap from "./Pages/roadmaps";
import Calender from "../src/components/calender/Calender"







const Home = () => (
  <>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
    </div>
    <Works />
    <About />
    <Experience />
    <Feedbacks />
    <EnquiryForm/>
    <Footer/>
    <div className='relative z-0'>
    </div>
  </>
);

const App = () => {
  return (
    
    <BrowserRouter>
    <Toaster />
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/executives" element={<ExecutivesDisplay />} />
          <Route path="/People" element={<ProfileCard />}  />
          <Route path="/AddPortfolio" element={<UserForm />}  />
          <Route path="/AddAchievement" element={<AchievementsForm />}  />
          <Route path="/editAchievement" element={<EditAchievements />}  />
          <Route path="/UserList" element={<UsersList />}  />
          <Route path="/members/:memberId" element={<Agustine />} />
          <Route path="/mentors/:mentorId" element={<MentorsDisplay />} />
          <Route path="/edit/:slug" element={<EditUser />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/roadmaps" element={<Roadmap />} />
          <Route path="/roadmap/:slug" element={<LearningRoadmap />} />
          <Route path="/calender" element={<Calender />} />




          

        </Routes>
      </div>
    </BrowserRouter>
 
  );
}

export default App;