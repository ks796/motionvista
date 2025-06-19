import React, { useState } from "react";
import "../style/works.scss";

const worksData = [
  { id: 1, src: "/works/work1.jpg", alt: "Work 1" },
  { id: 2, src: "/works/work2.jpg", alt: "Work 2" },
  { id: 3, src: "/works/work3.jpg", alt: "Work 3" },
  { id: 4, src: "/works/work4.jpg", alt: "Work 4" },
  { id: 5, src: "/works/work4.jpg", alt: "Work 5" },
  { id: 6, src: "/works/work3.jpg", alt: "Work 6" },
  { id: 7, src: "/works/work1.jpg", alt: "Work 7" },
  { id: 8, src: "/works/work2.jpg", alt: "Work 8" },
];

const Works = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (src) => {
    setSelectedImage(src);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="works" className="works">
      <h2>Our Works</h2>
      <div className="works-grid">
        {worksData.map(({ id, src, alt }) => (
          <img
            key={id}
            src={src}
            alt={alt}
            className="works-img"
            onClick={() => openLightbox(src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-backdrop"></div>
          <img
            src={selectedImage}
            alt="Expanded work"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()} // يمنع غلق النافذة عند الضغط على الصورة
          />
          <button
            className="close-btn"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
};

export default Works;
