import { Award, Briefcase, GraduationCap } from 'lucide-react';

function Alumni1() {
  const alumni1 = [
    {
      name: "Dr. Amanda Chen",
      graduation: "2015",
      role: "Senior Engineer at SpaceX",
      image: "https://source.unsplash.com/random/400x400?woman,professional,1",
      quote: "SEDS gave me the foundation I needed to pursue my dreams in the space industry."
    },
    {
      name: "James Wilson",
      graduation: "2017",
      role: "Founder of Orbital Dynamics",
      image: "https://source.unsplash.com/random/400x400?man,professional,1",
      quote: "The hands-on experience I gained through SEDS projects was invaluable for my career."
    },
    {
      name: "Dr. Maria Rodriguez",
      graduation: "2016",
      role: "NASA Research Scientist",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "SEDS opened doors to opportunities I never thought possible in space research."
    }
  ];

  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Alumni Network</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Celebrating the achievements of our alumni who continue to make an impact in the space industry.
          </p>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Alumni</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {alumni1.map((person, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <img 
                  src={person.image}
                  alt={person.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                  <p className="text-blue-400 mb-2">Class of {person.graduation}</p>
                  <p className="text-sm mb-4">{person.role}</p>
                  <blockquote className="italic opacity-90 text-sm">
                    "{person.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Alumni Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Briefcase className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <p>Industry Professionals</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mb-4">
                <GraduationCap className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">200+</div>
              <p>Advanced Degrees</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Award className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <p>Company Founders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Resources */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Alumni Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Mentorship Program</h3>
              <p className="opacity-90 mb-6">
                Give back to the SEDS community by mentoring current students and sharing your expertise.
              </p>
              <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                Become a Mentor
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Alumni Network</h3>
              <p className="opacity-90 mb-6">
                Connect with fellow alumni, share opportunities, and stay involved with SEDS initiatives.
              </p>
              <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                Join Network
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Alumni1;