import { Calendar, FileCheck, Users, Clock , Rocket} from 'lucide-react';

function Applications() {
  const openPositions = [
    {
      title: "Project Lead",
      department: "Engineering",
      requirements: [
        "Strong technical background in aerospace or related field",
        "Previous project management experience",
        "Excellent communication skills",
        "Currently enrolled student"
      ]
    },
    {
      title: "Outreach Coordinator",
      department: "Community Relations",
      requirements: [
        "Experience in event planning",
        "Strong public speaking skills",
        "Passion for space education",
        "Currently enrolled student"
      ]
    },
    {
      title: "Chapter Affairs and Expansion",
      department: "Intra and Inter National Relations",
      requirements: [
        "Experience in Public Relations preffered",
        "Strong communication skills",
        "Currently enrolled student"
      ]
    }
  ];

  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Open Positions</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Join our team and make an impact in space exploration and development.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Opportunities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                  <div className="flex items-center">
                  </div>
                  <p className="text-blue-400 mb-4">{position.department}</p>
                  
                  <div className="space-y-3 mb-6">

                    <div className="flex items-center">
                    </div>
                  </div>

                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-2 mb-6">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <FileCheck className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-1" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full w-full">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="feature-icon mb-4">
                <FileCheck className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">1. Apply</h3>
              <p className="opacity-80">Submit your application and resume</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Users className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">2. Interview</h3>
              <p className="opacity-80">Meet with the team</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Calendar className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">3. Decision</h3>
              <p className="opacity-80">Receive our response</p>
            </div>
            <div className="text-center">
              <div className="feature-icon mb-4">
                <Rocket className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">4. Onboarding</h3>
              <p className="opacity-80">Start your journey with us</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Who can apply?</h3>
              <p className="opacity-90">
                Currently enrolled university students from any field of study are welcome to apply. We value diversity and encourage applications from all backgrounds.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">What is the time commitment?</h3>
              <p className="opacity-90">
                Time commitments vary by position but typically range from 8-15 hours per week. We understand academic commitments and offer flexible scheduling.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Is prior experience required?</h3>
              <p className="opacity-90">
                While some positions may require specific skills or experience, many roles are open to beginners with a strong interest in space and willingness to learn.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Are positions paid?</h3>
              <p className="opacity-90">
                Most positions are volunteer-based, but we offer valuable experience, networking opportunities, and potential for future paid roles or internships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Applications;