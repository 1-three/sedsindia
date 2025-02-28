import { Rocket, Satellite, Radio, Atom } from 'lucide-react';

function Projects() {
  return (
    <div className="pt-16 min-h-screen text-white">
      {/* Hero Section */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Exploring the frontiers of space through innovative student-led projects and research initiatives.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://sedsindia.github.io/SEDS-Projects/images/urc.jpg"
                alt="URC"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">University Rover Challenge (URC)</h3>
                <p className="opacity-90 mb-4">
                  Team Vyadh, the official team of SEDS-VIT Projects, has qualified for the final round of URC 2020 as one of the top 36 teams in the world.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-600/50 px-3 py-1 rounded-full text-sm">2019 - 2022</span>
                  <span className="text-sm opacity-75">Team: SEDS-VIT</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://sedsindia.github.io/SEDS-Projects/images/cubesat.jpg"
                alt="CubeSat"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Student Unmanned Aerial Systems (SUAS) </h3>
                <p className="opacity-90 mb-4">
                Student Unmanned Aerial Systems - An aerial system is to be built, capable of fully autonomous flight and navigation, payload dropping, obstacle avoidance, etc. The SEDS-VIT team has managed to maneuver UGV(unmanned ground vehicle) autonomously and communicate with the ground station. Final design, flight time calculations and predictions have been done.

</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-600/50 px-3 py-1 rounded-full text-sm">2019 - 2022</span>
                  <span className="text-sm opacity-75">Team: SEDS-VIT</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://sedsindia.github.io/SEDS-Projects/images/rocketry.jpg"
                alt="Rocketry"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Extremity Rover</h3>
                <p className="opacity-90 mb-4">
                The SEDS-REC Projects team designed a Rocker bogie chassis made using PVC Pipes. The rover is controlled via Bluetooth using an Arduino Nano and is capable of treading through rough terrains. The project is completed and test verifications are done.

</p>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-600/50 px-3 py-1 rounded-full text-sm">2018 - 2019</span>
                  <span className="text-sm opacity-75">Team: SEDS-REC</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
            <img 
                  src="https://sedsindia.github.io/SEDS-Projects/images/space-robotics.jpg"
                  alt="Space Robotics"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Star Tracker</h3>
                  <p className="opacity-90 mb-4">
                  StarTracker is a telescope mount which will track and display, the object aimed by the telescope on Stellarium in real time. The SEDS-Celestia projects team has completed second prototype.

</p>
                  <div className="flex items-center space-x-4">
                    <span className="bg-blue-600/50 px-3 py-1 rounded-full text-sm">2019</span>
                    <span className="text-sm opacity-75">Team: SEDS Celestia</span>
                  </div>
                </div>
              </div>
        </div>
        </div>
      </section>


                  {/* Project Categories */}
      <section className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Project Categories</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="feature-card text-center p-6">
              <div className="feature-icon mb-4">
                <Rocket className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rocketry</h3>
              <p className="opacity-80">Design and launch of experimental rockets</p>
            </div>
            <div className="feature-card text-center p-6">
              <div className="feature-icon mb-4">
                <Satellite className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">CubeSats</h3>
              <p className="opacity-80">Small satellite development and deployment</p>
            </div>
            <div className="feature-card text-center p-6">
              <div className="feature-icon mb-4">
                <Radio className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Communications</h3>
              <p className="opacity-80">Space communication systems</p>
            </div>
            <div className="feature-card text-center p-6">
              <div className="feature-icon mb-4">
                <Atom className="w-12 h-12 mx-auto text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research</h3>
              <p className="opacity-80">Space science and technology research</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Own Project</h2>
            <p className="opacity-90 mb-6 max-w-2xl mx-auto">
              Have an innovative space project idea? We provide resources, mentorship, and funding opportunities to help bring your vision to life.
            </p>
            <button className="animate-button bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full">
              Submit Project Proposal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;