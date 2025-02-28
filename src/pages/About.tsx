import { Rocket, Heart, Star, Award } from 'lucide-react';

function About() {
  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">About SEDS</h1>
          <p className="text-xl opacity-90 max-w-3xl">
          Students for the Exploration and Development of Space (SEDS) is a 501(c)(3) non-profit organization that empowers young people to participate and make an impact in space exploration.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="opacity-90">
                To empower young people to contribute to the exploration and development of space through educational initiatives, hands-on projects, and networking opportunities.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
              <p className="opacity-90">
                A world where students play a leading role in advancing humanity's presence in space, fostering innovation and collaboration across borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Rocket className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="opacity-80">Pushing boundaries and exploring new frontiers</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Heart className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="opacity-80">Driven by our love for space exploration</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Star className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="opacity-80">Striving for the highest standards</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Award className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership</h3>
              <p className="opacity-80">Developing tomorrow's space leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our History</h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-blue-400">1980</h3>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-2">Foundation</h4>
                <p className="opacity-90">SEDS was founded at MIT and Princeton by Peter Diamandis, Todd Hawley, and Bob Richards.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-blue-400">1990s & 2000s</h3>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-2">Global Expansion</h4>
                <p className="opacity-90">SEDS expanded internationally, SEDS' India Chapter was established in 2004.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-start">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-bold text-blue-400">Today</h3>
              </div>
              <div className="md:w-2/3">
                <h4 className="text-xl font-semibold mb-2">Leading Space Education</h4>
                <p className="opacity-90">SEDS continues to be at the forefront of student space exploration and development.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;