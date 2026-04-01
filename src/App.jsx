import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;