import React from "react";
import "../style/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} جميع الحقوق محفوظة.</p>
      <p>
        تم تصميمه بواسطة{" "}
        <a
          href="https://www.instagram.com/kamelkhaled4662/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Kamel Khaled
        </a>
      </p>
    </footer>
  );
};

export default Footer;
