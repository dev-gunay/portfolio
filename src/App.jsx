import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="relative min-h-screen text-white bg-black overflow-hidden">

      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">

        {/* Purple Glow */}
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-purple-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>

        {/* Blue Glow */}
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-blue-600 opacity-30 rounded-full blur-3xl animate-pulse"></div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Home />
      </div>

    </div>
  );
}

export default App;