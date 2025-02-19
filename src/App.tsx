// import React, { useEffect, useRef, useState } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';
// import CountUp from 'react-countup';
// import ParticlesBackground from './components/ParticlesBackground';
// import { Rocket, Users, Globe2, BookOpen } from 'lucide-react';
// import 'locomotive-scroll/dist/locomotive-scroll.css'; // Ensure CSS is imported

// function App() {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [hue, setHue] = useState<number>(0);

//   useEffect(() => {
//     if (!scrollRef.current) return;

//     const scroll = new LocomotiveScroll({
//       lenisOptions: {
//         duration: 1.2, // Adjust scrolling smoothness
//         wheelMultiplier: 1.2, // Customize scroll speed
//       },
//     });

//     return () => {
//       scroll.destroy(); // Clean up
//     };
//   }, []);

//   // Rest of your code remains the same
//   return (
// <div className="relative" style={{ filter: `hue-rotate(${hue}deg)` }}>
// <ParticlesBackground />
// <div ref={scrollRef} data-scroll-container className="relative z-10">
//         {/* Hero Section */}
//         <section className="min-h-screen flex items-center justify-center text-white px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
//               Students for the Exploration and Development of Space
//             </h1>
//             <p className="text-xl md:text-2xl mb-8 opacity-90">
//               Empowering the next generation of space professionals
//             </p>
//             <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
//               Join SEDS
//             </button>
//           </div>
//         </section>

// {/* Hue Slider */}
// <div className="fixed top-4 right-4 bg-white/10 p-3 rounded-lg backdrop-blur-md">
//   <div className="flex items-center space-x-2">
//     <Rocket className="w-5 h-5 text-white" />
//     <input
//       type="range"
//       min="0"
//       max="360"
//       value={hue}
//       onChange={(e) => setHue(Number(e.target.value))}
//       className="w-32 cursor-pointer"
//       title="Adjust Hue"  // Accessibility improvement
//       aria-label="Adjust Hue"
//     />
//   </div>
// </div>

//         {/* Impact Dashboard */}
//         <section className="py-20 bg-black/50 backdrop-blur-sm text-white text-center">
//           <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             <div className="p-6 rounded-xl bg-white/10">
//               <h3 className="text-2xl font-semibold">Projects Completed</h3>
//               <CountUp end={120} duration={3} className="text-4xl font-bold" />
//             </div>
//             <div className="p-6 rounded-xl bg-white/10">
//               <h3 className="text-2xl font-semibold">Active Chapters</h3>
//               <CountUp end={50} duration={3} className="text-4xl font-bold" />
//             </div>
//             <div className="p-6 rounded-xl bg-white/10">
//               <h3 className="text-2xl font-semibold">Global Members</h3>
//               <CountUp end={10000} duration={3} className="text-4xl font-bold" />
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-20 bg-black/50 backdrop-blur-sm text-white">
//           <div className="max-w-6xl mx-auto px-4">
//             <h2 className="text-4xl font-bold text-center mb-16">What We Do</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//               {[{
//                 icon: <Rocket className="w-12 h-12 mx-auto" />, title: "Space Projects", description: "Hands-on experience with real space missions and projects"
//               }, {
//                 icon: <Users className="w-12 h-12 mx-auto" />, title: "Community", description: "Connect with like-minded space enthusiasts"
//               }, {
//                 icon: <Globe2 className="w-12 h-12 mx-auto" />, title: "Global Network", description: "Join chapters worldwide and expand your reach"
//               }, {
//                 icon: <BookOpen className="w-12 h-12 mx-auto" />, title: "Education", description: "Access resources and learning opportunities"
//               }].map((feature, index) => (
//                 <div key={index} className="feature-card text-center p-6 rounded-xl hover:bg-white/5">
//                   <div className="feature-icon mb-4">{feature.icon}</div>
//                   <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//                   <p className="opacity-80">{feature.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Latest News Section */}
//         <section className="py-20 text-white">
//           <div className="max-w-6xl mx-auto px-4">
//             <h2 className="text-4xl font-bold text-center mb-16">Latest News</h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {[1, 2, 3].map((item) => (
//                 <div key={item} className="news-card bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden">
//                   <img 
//                     src={`https://source.unsplash.com/random/800x600?space,${item}`}
//                     alt="Space news"
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-6">
//                     <h3 className="text-xl font-semibold mb-2">Space News Title</h3>
//                     <p className="opacity-80 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
//                     <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">Read more →</a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Footer */}
//         <footer className="bg-black/50 backdrop-blur-sm text-white py-12">
//           <div className="max-w-6xl mx-auto px-4">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//               {[{
//                 title: "About SEDS", content: "Empowering students to make an impact in space exploration since 1980."
//               }, {
//                 title: "Quick Links", links: ["About Us", "Projects", "Chapters", "Contact"]
//               }, {
//                 title: "Connect", links: ["Twitter", "LinkedIn", "Instagram", "Facebook"]
//               }, {
//                 title: "Newsletter", content: "Stay updated with our latest news and events.", input: true
//               }].map((section, index) => (
//                 <div key={index}>
//                   <h3 className="text-xl font-bold mb-4">{section.title}</h3>
//                   {section.content && <p className="opacity-80">{section.content}</p>}
//                   {section.links && (
//                     <ul className="space-y-2 opacity-80">
//                       {section.links.map((link, i) => (
//                         <li key={i}><a href="#" className="hover:text-blue-400 transition-colors duration-300">{link}</a></li>
//                       ))}
//                     </ul>
//                   )}
//                   {section.input && (
//                     <input
//                       type="email"
//                       placeholder="Enter your email"
//                       className="newsletter-input w-full px-4 py-2 rounded bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:border-blue-400"
//                     />
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className="mt-12 pt-8 border-t border-white/20 text-center opacity-80">
//               <p>© 2025 SEDS INDIA. All rights reserved.</p>
//             </div>
//           </div>
//         </footer>

//         <style>
//           {`
//             @keyframes footerGradient {
//               0% { background: rgba(0, 0, 0, 0.5); }
//               50% { background: rgba(0, 0, 0, 0.7); }
//               100% { background: rgba(0, 0, 0, 0.5); }
//             }
//             .animate-footerGradient {
//               animation: footerGradient 5s infinite alternate ease-in-out;
//             }
//           `}
//         </style>

//       </div>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import CountUp from 'react-countup';
import ParticlesBackground from './components/ParticlesBackground';
import { Rocket, Users, Globe2, BookOpen } from 'lucide-react';

function App() {
  const [hue, setHue] = useState<number>(0);

  return (
    <div className="relative" style={{ filter: `hue-rotate(${hue}deg)` }}>
      <ParticlesBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center text-white px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Students for the Exploration and Development of Space
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Empowering the next generation of space professionals
            </p>
            <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Join SEDS
            </button>
          </div>
        </section>

        {/* Hue Slider */}
        <div className="fixed top-4 right-4 bg-white/10 p-3 rounded-lg backdrop-blur-md">
          <div className="flex items-center space-x-2">
            <Rocket className="w-5 h-5 text-white" />
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="w-32 cursor-pointer"
              title="Adjust Hue"
              aria-label="Adjust Hue"
            />
          </div>
        </div>

        {/* Impact Dashboard */}
        <section className="py-20 bg-black/50 backdrop-blur-sm text-white text-center">
          <h2 className="text-4xl font-bold mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-white/10">
              <h3 className="text-2xl font-semibold">Projects Completed</h3>
              <CountUp end={120} duration={3} className="text-4xl font-bold" />
            </div>
            <div className="p-6 rounded-xl bg-white/10">
              <h3 className="text-2xl font-semibold">Active Chapters</h3>
              <CountUp end={50} duration={3} className="text-4xl font-bold" />
            </div>
            <div className="p-6 rounded-xl bg-white/10">
              <h3 className="text-2xl font-semibold">Members</h3>
              <CountUp end={1000} duration={3} className="text-4xl font-bold" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-black/50 backdrop-blur-sm text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
                icon: <Rocket className="w-12 h-12 mx-auto" />, title: "Space Projects", description: "Hands-on experience with real space missions and projects"
              }, {
                icon: <Users className="w-12 h-12 mx-auto" />, title: "Community", description: "Connect with like-minded space enthusiasts"
              }, {
                icon: <Globe2 className="w-12 h-12 mx-auto" />, title: "Global Network", description: "Join chapters worldwide and expand your reach"
              }, {
                icon: <BookOpen className="w-12 h-12 mx-auto" />, title: "Education", description: "Access resources and learning opportunities"
              }].map((feature, index) => (
                <div key={index} className="feature-card text-center p-6 rounded-xl hover:bg-white/5">
                  <div className="feature-icon mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-sm text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="mt-12 pt-8 border-t border-white/20 text-center opacity-80">
              <p>© 2025 SEDS INDIA. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;