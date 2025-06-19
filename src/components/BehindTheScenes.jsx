import React from "react";
import "../style/behind.scss";

const BehindTheScenes = () => {
  return (
    <section id="behind" className="behind" data-aos="zoom-in">
      <h2>Behind The Scenes</h2>
      <div className="behind-image-wrapper">
        <img src="/behind.jpg" alt="Behind The Scenes" loading="lazy" />
      </div>
    </section>
  );
};

export default BehindTheScenes;
