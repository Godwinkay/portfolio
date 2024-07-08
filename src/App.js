import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import Aos from 'aos';
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  
  }, [])

  return (
    <div>
      <div className="w-screen">
        <div className="bg-[#0d0461] text-white">
          <Navbar />
          <Hero />
        </div>
        <Techstack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
