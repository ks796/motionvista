import React, { useEffect } from "react";
import "../style/hero.scss";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollZoom = document.querySelector(".scroll-zoom");
      const scrollY = window.scrollY;
      const scale = 1 + scrollY / 1000;
      const opacity = Math.max(1 - scrollY / 400, 0);
      const blur = Math.min(scrollY / 100, 10);

      if (scrollZoom) {
        scrollZoom.style.transform = `scale(${scale})`;
        scrollZoom.style.opacity = opacity;
        scrollZoom.style.filter = `blur(${blur}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero" id="hero">
      <video autoPlay muted loop className="video-bg">
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <h1 className="scroll-zoom">Immerse in MotionVista</h1>
        <p>Experience the cinematic story.</p>
      </div>
    </div>
  );
};

export default Hero;
