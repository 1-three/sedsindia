import { MapPin, Users, Globe2, Award } from 'lucide-react';

function Chapters() {
  const featuredChapters = [
    {
      name: "SEDS VIT",
      location: "VIT Vellore",
      image: "images/vitv.jpg",
      members: 120,
      projects: 8
    },
    {
      name: "SEDS CUSAT",
      location: "CUSAT",
      image: "/images/scusat.jpg",
      members: 95,
      projects: 6
    },
    {
      name: "SEDS Celestia",
      location: "BITS Goa",
      image: "images/celestia.jpg",
      members: 85,
      projects: 5
    },
    {
      name: "SEDS Antariksh",
      location: "VIT Chennai",
      image: "images/vitc.jpg",
      members: 85,
      projects: 5
    },
    {
      name: "SEDS Celestia Explora",
      location: "Shiv Nadar University",
      image: "images/ce.jpg",
      members: 85,
      projects: 5
    },
    {
      name: "SEDS REC",
      location: "REC",
      image: "/images/rec.jpg",
      members: 85,
      projects: 5
    },
    {
      name: "SEDS Nebula",
      location: "VIT Bhopal",
      image: "images/nebula.jpg",
      members: 85,
      projects: 5
    },
    {
      name: "SEDS AGI",
      location: "AGI",
      image: "images/agi.jpg",
      members: 85,
      projects: 5
    },
    {
      name: "SEDS Aurora",
      location: "VIT AP",
      image: "/images/aurora.jpg",
      members: 85,
      projects: 5
    },
    {
      name: "SEDS BPHC",
      location: "BITS Hyderabad",
      image: "images/bphc.jpg",
      members: 85,
      projects: 5
    },
    {
      name: "SEDS KCT",
      location: "KCT",
      image: "images/kct.jpg",
      members: 85,
      projects: 5
    }
  ];

  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">SEDS Chapters</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Join a global network of student-led chapters dedicated to space exploration and development through SEDS India.
            </p>
            </div>
      </section>

      {/* Featured Chapters */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Chapters</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredChapters.map((chapter, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={chapter.image}
                  alt={chapter.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{chapter.name}</h3>
                  <div className="flex items-center mb-3">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="opacity-90">{chapter.location}</span>
                  </div>
                  <div className="flex justify-between text-sm opacity-90">
                    <span>{chapter.members} Members</span>
                    <span>{chapter.projects} Active Projects</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Global Presence</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="feature-icon mb-4">
                <Globe2 className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">80+</div>
              <p>Universities</p>
            </div>
            <div>
              <div className="feature-icon mb-4">
                <MapPin className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">20+</div>
              <p>States</p>
            </div>
            <div>
              <div className="feature-icon mb-4">
                <Users className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5000+</div>
              <p>Active Members</p>
            </div>
            <div>
              <div className="feature-icon mb-4">
                <Award className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Start a Chapter */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Start a Chapter</h2>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">
              Don't see a SEDS chapter at your university? Start one today and join our global network of space enthusiasts.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
                Start a Chapter
              </button>
              <button className="animate-button bg-transparent border-2 border-blue-600 hover:bg-blue-600/20 text-white font-bold py-3 px-8 rounded-full">
                Chapter Guidelines
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Resources */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Chapter Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Getting Started</h3>
              <ul className="space-y-3 opacity-90">
                <li>Chapter Registration</li>
                <li>Leadership Guidelines</li>
                <li>Event Planning</li>
                <li>Budget Templates</li>
              </ul>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Project Support</h3>
              <ul className="space-y-3 opacity-90">
                <li>Technical Resources</li>
                <li>Funding Opportunities</li>
                <li>Equipment Access</li>
                <li>Mentorship Network</li>
              </ul>
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Chapter Network</h3>
              <ul className="space-y-3 opacity-90">
                <li>Inter-Chapter Events</li>
                <li>Knowledge Sharing</li>
                <li>Collaboration Tools</li>
                <li>Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Chapters;