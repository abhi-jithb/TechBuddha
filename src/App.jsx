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





const Home = () => (
  <>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
    </div>
    <About />
    <Experience />
    <Works />
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
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/executives" element={<ExecutivesDisplay />} />
          <Route path="/People" element={<ProfileCard />}  />
          <Route path="/Portfolio" element={<AchievementsSection />}  />
          <Route path="/agustine" element={<Agustine/>}  />
          <Route path="/Antony-Agnel" element={<Antony/>}  />
          <Route path="/Aryan" element={<Aryan/>}  />
          <Route path="/Mithil" element={<Mithil/>}  />


          

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;