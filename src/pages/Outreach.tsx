import { Megaphone, Users, School, Rocket } from 'lucide-react';

function Outreach() {
  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Outreach Programs</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Inspiring the next generation of space explorers through educational programs, events, and community engagement.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Programs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="feature-icon mb-4">
                <School className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">School Visits</h3>
              <p className="opacity-80">Interactive presentations and workshops for K-12 students</p>
            </div>
            <div className="feature-card bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="feature-icon mb-4">
                <Rocket className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Space Workshops</h3>
              <p className="opacity-80">Hands-on learning experiences with space technology</p>
            </div>
            <div className="feature-card bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="feature-icon mb-4">
                <Megaphone className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Public Events</h3>
              <p className="opacity-80">Space-themed events and exhibitions for the community</p>
            </div>
            <div className="feature-card bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <div className="feature-icon mb-4">
                <Users className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
              <p className="opacity-80">Connecting students with space industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">10K+</div>
              <p>Students Reached</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
              <p>School Visits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
              <p>Workshops Conducted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
              <p>Partner Organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Get Involved</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">For Schools</h3>
              <p className="mb-4 opacity-90">
                Bring space education to your school through our interactive programs and workshops.
              </p>
              <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                Request a Visit
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">For Volunteers</h3>
              <p className="mb-4 opacity-90">
                Join our outreach team and help inspire the next generation of space explorers.
              </p>
              <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Outreach;