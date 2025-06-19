import React, { useRef, useEffect, useState } from "react";
import "../style/about.scss";

const About = () => {
  const sectionRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // حساب نسبة ظهور القسم في الشاشة (0 يعني خارج الشاشة، 1 يعني كاملاً ظاهر)
      let visibleRatio = 1 - rect.top / windowHeight;

      // ضبط القيم بين 0 و 1
      visibleRatio = Math.min(Math.max(visibleRatio, 0), 1);

      // عكس النسبة لتحصل على تأثير التكبير ثم الاختفاء عند النزول
      const newScale = 1 + visibleRatio * 0.5; // تكبير حتى 1.5
      const newOpacity = 1 - visibleRatio; // يقل تدريجياً حتى 0

      setScale(newScale);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="about"
      className="about"
      ref={sectionRef}
      style={{ transform: `scale(${scale})`, opacity: opacity }}
      data-aos="fade-up"
    >
      <h2>About Us</h2>
      <p>
        MotionVista is a modern cinematic website showcasing breathtaking visuals,
        smooth animations, and a captivating user experience.
      </p>
    </section>
  );
};

export default About;
