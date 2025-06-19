import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Works from "./components/Works";
import BehindTheScenes from "./components/BehindTheScenes";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";  // إذا أضفت الفوتر

import "./App.scss";
import "./style/main.scss";
import "aos/dist/aos.css"; // استيراد ستايل AOS

const App = () => {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: true,
      });
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works />
      <BehindTheScenes />
      <Testimonials />
      <Contact />
      <Footer /> {/* إذا أضفت الفوتر */}
    </>
  );
};

export default App;
