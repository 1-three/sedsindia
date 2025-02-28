import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react'; // Import Rocket icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hue, setHue] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty("--hue", `${hue}deg`);
  }, [hue]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/outreach', label: 'Outreach' },
    { path: '/projects', label: 'Projects' },
    { path: '/team', label: 'Team' },
    // { path: '/alumni', label: 'Alumni' },
    { path: '/chapters', label: 'Chapters' },
    { path: '/blog', label: 'Blog' },
    { path: '/join', label: 'Join Us' },
    { path: '/applications', label: 'Applications' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="flex items-center justify-between w-full max-w-5xl h-16">
          <div className="flex items-center">
            <NavLink to="/" className="text-white font-bold text-xl">SEDS</NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => 
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300
                    ${isActive 
                      ? 'text-white bg-blue-600/50' 
                      : 'text-gray-300 hover:bg-blue-600/30 hover:text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-600/30 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300
                  ${isActive
                    ? 'text-white bg-blue-600/50'
                    : 'text-gray-300 hover:bg-blue-600/30 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}

      {/* Hue Slider */}
      <div className="fixed bottom+11 right-24 flex items-center">
        <Rocket className="text-white mr-2" />
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
    </nav>
  );
};

export default Navbar;