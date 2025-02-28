import { Rocket, Users, Star, Award } from 'lucide-react';

function Join() {
  const benefits = [
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: "Hands-on Experience",
      description: "Work on real space projects and gain practical skills",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Network",
      description: "Connect with industry professionals and like-minded students",
    },
    {
      icon: <Star className="w-12 h-12 text-blue-400" />,
      title: "Leadership",
      description: "Develop leadership skills through project management",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-400" />,
      title: "Recognition",
      description: "Earn certificates and awards for your contributions",
    },
  ];

  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Join SEDS</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Become part of a global community dedicated to advancing space exploration and development.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Member Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="feature-card bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="feature-icon mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="opacity-80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Join;
