import { Link } from "react-router-dom";

import "./Footer.css";

import fb from "../assets/images/fbimg.png";
import insta from "../assets/images/instaimg.png";
import twitter from "../assets/images/twitterimg.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="socialmedia">
        <a
          href="https://www.facebook.com"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fb} alt="Facebook" />
        </a>
        <a
          href="https://www.twitter.com"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com"
          className="social-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={insta} alt="Instagram" />
        </a>
      </div>

      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Nebul art, Tous Droits Réservés.</p>
      </div>
      <Link to="/contact">
        <span className="contact-link-text">
          Contact <span className="contact-link-icon">💬</span>
        </span>
      </Link>
    </footer>
  );
}

export default Footer;
