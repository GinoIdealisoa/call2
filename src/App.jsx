import React from "react";

import Navbar from "./layouts/Navbar";

import HeroSection from "./pages/HeroSection";
import DemoSection from "./pages/DemoSection";
import Footer from "./layouts/Footer";
import Mission from "./pages/Mission";
import About from "./pages/About";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="font-inter overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <Mission />
        <About />
        <DemoSection/>
        {/* <Contact /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;