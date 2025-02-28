import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollContext } from './components/ScrollContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Rocket, Users, Globe2, BookOpen } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import Home from './pages/Home';
import About from './pages/About';
import Outreach from './pages/Outreach';
import Projects from './pages/Projects';
import Team from './pages/Team';
import Alumni from './pages/Alumni';
import Chapters from './pages/Chapters';
import Blog from './pages/Blog';
import Join from './pages/Join';
import Applications from './pages/Applications';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Ensure CSS is imported
import { useLocation } from "react-router-dom";

function AppContent() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollInstance = useRef<LocomotiveScroll | null>(null);
  const [hue, setHue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", `${hue}deg`);
  }, [hue]);


  useEffect(() => {
    if (scrollInstance.current) {
      scrollInstance.current.destroy();
      scrollInstance.current = null;
    }

    if (scrollRef.current) {
      scrollInstance.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1.2,
      });

      scrollInstance.current.scrollTo(0, { duration: 0 });
    }

    return () => {
      if (scrollInstance.current) {
        scrollInstance.current.destroy();
        scrollInstance.current = null;
      }
    };
  }, [location]);

  
  return (

    <ScrollContext.Provider value={scrollInstance}>
      <div ref={scrollRef} data-scroll-container>
        <ScrollToTop />
        <div className="relative flex flex-col items-center z-100" style={{ filter: `hue-rotate(${hue}deg)` }}>
        <ParticlesBackground />
        <Navbar />
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/outreach" element={<Outreach />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/team" element={<Team/>} />
              {/* <Route path="/alumni" element={<Alumni />} /> */}
              <Route path="/chapters" element={<Chapters />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/join" element={<Join />} />
              <Route path="/applications" element={<Applications />} />
            </Routes>
          </div>
        </div>
        <style>
          {`
            @keyframes footerGradient {
              0% { background: rgba(0, 0, 0, 0.5); }
              50% { background: rgba(0, 0, 0, 0.7); }
              100% { background: rgba(0, 0, 0, 0.5); }
            }
            .animate-footerGradient {
              animation: footerGradient 5s infinite alternate ease-in-out;
            }
          `}
        </style>
      </div>
    </ScrollContext.Provider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

// function App() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const scrollInstance = useRef<LocomotiveScroll | null>(null);
//   const [hue, setHue] = useState<number>(0);
//   const location = useLocation();

//   useEffect(() => {
//     // Clean up any existing instance first
//     if (scrollInstance.current) {
//       scrollInstance.current.destroy();
//       scrollInstance.current = null;
//     }

//     // Initialize new instance
//     if (scrollRef.current) {
//       scrollInstance.current = new LocomotiveScroll({
//         el: scrollRef.current,
//         smooth: true,
//         multiplier: 1.2,
//       });

//       // Reset scroll position
//       scrollInstance.current.scrollTo(0, { duration: 0 });
//     }

//     // Cleanup on unmount or route change
//     return () => {
//       if (scrollInstance.current) {
//         scrollInstance.current.destroy();
//         scrollInstance.current = null;
//       }
//     };
//   }, [location]);

export default App;