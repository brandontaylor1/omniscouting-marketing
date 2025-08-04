import Navbar from './components/Navbar';


import './App.css'
import backgroundImage from '../public/images/backgroundImage.jpg'

function App() {

  return (
    <>
    
    <Navbar />
    <section className="hero relative h-screen w-screen overflow-hidden">
      <img
        src={backgroundImage}
        alt="Stadium"
        className="object-cover w-full h-full fixed inset-0"
        />
      <div className="absolute inset-0 bg-black/70 z-10 flex flex-col items-start justify-center text-white text-center pl-20 ">

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
     <section className="py-20 px-6 text-center relative z-20">
        <h2 className="text-4xl font-bold mb-4 text-white">Built for Football Professionals</h2>
        <p className="text-white max-w-2xl mx-auto">
          Omni Scouting was created by football insiders who understand the demands of managing players, data, and decisions. Whether you're in a high school, college, or pro front office — this platform was designed for you.
        </p>
      </section>

         {/* Features Section */}
      <section className="py-20 px-6 text-center relative z-20">
        <h2 className="text-4xl font-bold mb-12 text-white">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Player Profiles</h3>
            <p className="text-white">Centralize every player's academic, athletic, and personal data in one profile.</p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">AI-Powered Evaluations</h3>
            <p className="text-white">Summarize notes and generate reports with AI to streamline your scouting process.</p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">NIL Tracking</h3>
            <p className="text-white">Monitor NIL activity and ensure compliance with clear, accessible records.</p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Strength & Conditioning Logs</h3>
            <p className="text-white">Track performance metrics and physical development in real time.</p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Communication Tools</h3>
            <p className="text-white">Share notes and evaluations across departments to keep everyone aligned.</p>
          </div>
          <div className="p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-white">Custom Dashboards</h3>
            <p className="text-white">Visualize trends and data most important to your staff and program goals.</p>
          </div>
        </div>
      </section>

          {/* Pricing Section */}
                {/* Pricing Section */}
      <section className="py-20 px-6 text-center relative z-20">
        <h2 className="text-4xl font-bold mb-4 text-white">Simple Pricing</h2>
        <p className="text-white max-w-2xl mx-auto mb-12">
          Choose the plan that fits your organization. All plans come with onboarding support and full access to all modules.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div className="border border-white/30 rounded-lg p-8 max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-2 text-white">High School</h3>
            <p className="text-3xl font-semibold mb-4 text-white">$99/mo</p>
            <ul className="text-white text-left list-disc list-inside space-y-2">
              <li>Up to 75 players</li>
              <li>Full feature access</li>
              <li>Onboarding support</li>
            </ul>
          </div>
          <div className="border border-white/30 rounded-lg p-8 max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-2 text-white">College</h3>
            <p className="text-3xl font-semibold mb-4 text-white">$299/mo</p>
            <ul className="text-white text-left list-disc list-inside space-y-2">
              <li>Up to 150 players</li>
              <li>Team & staff dashboards</li>
              <li>Advanced integrations</li>
            </ul>
          </div>
          <div className="border border-white/30 rounded-lg p-8 max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-2 text-white">Pro / Enterprise</h3>
            <p className="text-3xl font-semibold mb-4 text-white">Custom</p>
            <ul className="text-white text-left list-disc list-inside space-y-2">
              <li>Unlimited players</li>
              <li>API + CRM integration</li>
              <li>Dedicated account manager</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 text-center relative z-20">
        <h2 className="text-4xl font-bold mb-4 text-white">Get in Touch</h2>
        <p className="text-white max-w-xl mx-auto mb-8">
          Ready to learn more or schedule a demo? Send us a message and we'll get back to you within 24 hours.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border border-white/30 rounded bg-transparent text-white placeholder-white/70" required />
          <input type="email" placeholder="Email" className="w-full p-3 border border-white/30 rounded bg-transparent text-white placeholder-white/70" required />
          <textarea placeholder="Message" className="w-full p-3 border border-white/30 rounded h-32 bg-transparent text-white placeholder-white/70" required></textarea>
          <button type="submit" className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">Submit</button>
        </form>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-8">
          Ready to learn more or schedule a demo? Send us a message and we’ll get back to you within 24 hours.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 border rounded" required />
          <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
          <textarea placeholder="Message" className="w-full p-3 border rounded h-32" required></textarea>
          <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App
