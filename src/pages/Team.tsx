import { Award, Briefcase, GraduationCap, Linkedin } from 'lucide-react';

function Team() {
  const team = [
    {
      name: "Nupur Sharma",
      graduation: "2026",
      role: "Chairperson",
      image: "images/nupur.jpg",
      quote: "If you can dream it you can do it",
      linkedin: "https://in.linkedin.com/in/nupur-sharma-a24b66274"
    },
    {
      name: "Amod Gawade",
      graduation: "2026",
      role: "Vice-Chair",
      image: "images/amodh.jpg",
      quote: "Genius is talent set on fire by courage.",
      linkedin: "https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav"
    },
    {
      name: "Shyam Venkatraman",
      graduation: "2027",
      role: "Executive Director",
      image: "images/shyam.jpg",
      quote: "The purpose of life is a life of purpose",
      linkedin: "https://www.linkedin.com/in/shyam-venkatraman-b9374a21b/"
    },
    {
      name: "Krishna Narwade",
      graduation: "2026",
      role: "Secretary",
      image: "images/krishna.jpg",
      quote: "You only live once, but if you do it right, once is enough",
      linkedin: "https://www.linkedin.com/in/krishna-narwade-439ba0258"
    },
    {
      name: "Arohi Soni",
      graduation: "2026",
      role: "Treasurer",
      image: "images/arohi.jpg",
      quote: "Winners are not those who never fail, but those who never quit",
      linkedin: "https://www.linkedin.com/in/arohi-soni-ba9b5125b/"
    },
    {
      name: "Aisha Jennath",
      graduation: "2026",
      role: "Initiative and Outreach Coordinator",
      image: "images/aisha.jpg",
      quote: "Win small, Win early, Win often",
      linkedin: "https://www.linkedin.com/in/aishajennath"
    },
    {
      name: "Vasundhra Sharma",
      graduation: "2027",
      role: "Creative and Design Lead",
      image: "images/vasundhra.jpg",
      quote: "There is no greater agony than bearing an untold story inside you.",
      linkedin: "https://www.linkedin.com/in/vasundhra-s-80b081301?trk=contact-info"
    },
    {
      name: "Sukruta Nadkarni",
      graduation: "2027",
      role: "Chapter Affairs and Expansion Manager",
      image: "images/sukruta.jpg",
      quote: "Reach for the stars",
      linkedin: "https://www.linkedin.com/in/sukruta-nadkarni"
    },
    {
      name: "Aatreyee",
      graduation: "2027",
      role: "Webmaster",
      image: "images/aatreyee.jpg",
      quote: "Rage, rage against the dying of the light",
      linkedin: "https://www.linkedin.com/in/aatreyee/"
    },
    {
      name: "Nikhil K",
      graduation: "2027",
      role: "OneSpace Manager",
      image: "images/y.jpg",
      quote: "Slow and steady wins the race.",
      linkedin: "https://www.linkedin.com/in/nikhil-k-6b40352b2/"
    },
    {
      name: "Vaibhavi",
      graduation: "2027",
      role: "Social Media Manager",
      image: "images/vaibhavi.jpg",
      quote: "The people who are crazy enough to think that they can change the world are the ones who do",
      linkedin: "https://www.linkedin.com/in/vaibhavi-yadav-13169a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      name: "Ronak Madkaikar",
      graduation: "2026",
      role: "Projects Manager",
      image: "images/x.jpg",
      quote: "Where curiosity meets innovation, the impossible becomes inevitable.",
      linkedin: "https://www.linkedin.com/in/ronak-madkaikar-732419285/"
    },
    {
      name: "Shrinidhi G",
      graduation: "2027",
      role: "Design and Creatives",
      image: "images/shrinidhi.jpg",
      quote: "Dream beyond the cosmos",
      linkedin: "https://www.linkedin.com/in/shrinidhi-g-64b0532b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{person.name}</h3>
                      <p className="text-blue-400 mb-2">Class of {person.graduation}</p>
                      <p className="text-sm mb-4">{person.role}</p>
                    </div>
                    <a 
                      href={person.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
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