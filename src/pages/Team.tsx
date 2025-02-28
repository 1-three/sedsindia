import { Award, Briefcase, GraduationCap } from 'lucide-react';

function Team() {
  const team = [
    {
      name: "Amod Gawade",
      graduation: "2026",
      role: "Vice-Chair",
      image: "https://source.unsplash.com/random/400x400?woman,professional,1",
      quote: "placeholder"
    },
    {
      name: "Shyam Venkatraman",
      graduation: "2026",
      role: "Executive Director",
      image: "https://source.unsplash.com/random/400x400?man,professional,1",
      quote: "placeholder"
    },
    {
      name: "Arohi Soni",
      graduation: "2026",
      role: "Treasurer",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    }
    ,
    {
      name: "Aisha Jennath",
      graduation: "2026",
      role: "Initiative and Outreach Coordinator",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Krishna",
      graduation: "2026",
      role: "Secretary",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Nupur Sharma",
      graduation: "2026",
      role: "Chair",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Vasundhra Sharma",
      graduation: "2027",
      role: "Creative and Design Lead",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Sukruta Nadkarni",
      graduation: "2027",
      role: "Chapter Affairs and Expansion Manager",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Nikhil",
      graduation: "2027",
      role: "OneSpace Manager",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Aatreyee",
      graduation: "2027",
      role: "Webmaster",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Vaibhavi",
      graduation: "2027",
      role: "Social Media Manager",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Ronak Madkaikar",
      graduation: "2026",
      role: "Projects Manager",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    },
    {
      name: "Shrinidhi G",
      graduation: "2027",
      role: "Creative and Design Lead",
      image: "https://source.unsplash.com/random/400x400?woman,professional,2",
      quote: "placeholder"
    }
  ];

  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Team</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Meet the people behind the scenes.
          </p>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Team 2025</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((person, index) => (
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

    </div>
  );
}

export default Team;