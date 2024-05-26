import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <div className="w-screen">
        <div className="bg-black text-white">
          <Navbar />
          <Hero />
        </div>
        <Techstack />
        <Projects />
      </div>
    </div>
  );
}

export default App;
