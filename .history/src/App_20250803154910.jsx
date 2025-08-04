
import './App.css'

function App() {

 return (
    <section className="relative h-screen w-full">
      <img
        src="/stadium-bg.jpg"
        alt="Stadium"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/40 z-10 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-sm uppercase tracking-widest mb-4">Total Control. Every Player. One Platform.</h1>
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6">OmniScouting</h2>
        <p className="max-w-xl mb-6 text-lg">
          The all-in-one player management system built for teams that want to win on and off the field.
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition">Schedule a Demo</button>
          <button className="bg-white/10 border border-white px-6 py-3 rounded-lg font-medium hover:bg-white/20 transition">Watch Overview</button>
        </div>
      </div>
    </section>
  );
}

export default App
