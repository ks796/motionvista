import React, { useState, useEffect } from "react";
import "../style/testimonials.scss";

const testimonialsData = [
  {
    id: 1,
    text: "MotionVista’s visuals and animations blew me away! Highly recommended.",
    author: "kamel khaled",
  },
  {
    id: 2,
    text: "A cinematic experience that truly immerses you. Stunning work!",
    author: "kamel khaled ",
  },
  {
    id: 3,
    text: "Smooth scrolling and beautiful design. Loved the parallax effects.",
    author: "kamel khaled",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonialsData.length;

  // تغيير الشهادة تلقائياً كل 5 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [length]);

  const prevTestimonial = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextTestimonial = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  return (
    <section id="testimonials" className="testimonials" data-aos="fade-up">
      <h2>Testimonials</h2>
      <div className="testimonial-slider">
        {testimonialsData.map(({ id, text, author }, index) => (
          <div
            key={id}
            className={`testimonial ${index === current ? "active" : "inactive"}`}
          >
            <p>"{text}"</p>
            <h4>- {author}</h4>
          </div>
        ))}
        <button className="prev-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
          &#10094;
        </button>
        <button className="next-btn" onClick={nextTestimonial} aria-label="Next testimonial">
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
