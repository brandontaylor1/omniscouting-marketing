import Navbar from './components/Navbar';


import './App.css'
import backgroundImage from '../public/images/backgroundImage.jpg'

function App() {

  return (
    <>
    
    <Navbar />
    <section className="relative h-screen w-screen overflow-hidden">
      <img
        src={backgroundImage}
        alt="Stadium"
        className="object-cover w-full h-full fixed inset-0"
        />
      <div className="fixed inset-0 bg-black/70 z-10 flex flex-col items-start justify-center text-white text-center pl-20 ">

        <img src="/images/logowhite.svg" alt="Logo" className="w-1/4" />
        <p className="max-w-lg text-left mb-8 text-lg font-neue-montreal">
          The all-in-one player management system built for teams that want to win on and off the field.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition">Schedule a Demo</button>
          <button className="bg-white/10 border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition">Watch Overview</button>
        </div>
      </div>
    </section>

    {/* About Section */}
     <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Built for Football Professionals</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Omni Scouting was created by football insiders who understand the demands of managing players, data, and decisions. Whether you're in a high school, college, or pro front office — this platform was designed for you.
        </p>
      </section>

         {/* Features Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Player Profiles</h3>
            <p>Centralize every player’s academic, athletic, and personal data in one profile.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">AI-Powered Evaluations</h3>
            <p>Summarize notes and generate reports with AI to streamline your scouting process.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">NIL Tracking</h3>
            <p>Monitor NIL activity and ensure compliance with clear, accessible records.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Strength & Conditioning Logs</h3>
            <p>Track performance metrics and physical development in real time.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Communication Tools</h3>
            <p>Share notes and evaluations across departments to keep everyone aligned.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Custom Dashboards</h3>
            <p>Visualize trends and data most important to your staff and program goals.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App
