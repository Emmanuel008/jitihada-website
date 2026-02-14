import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__col footer__col--company">
            <div className="footer__brand">Jitihada Enterprises Company Limited</div>
            <div className="footer__social">
              <a href="https://facebook.com" className="footer__social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://instagram.com" className="footer__social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="footer__col footer__col--links">
            <h3 className="footer__heading">Useful Links</h3>
            <nav className="footer__nav">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer__nav-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="footer__col footer__col--contact">
            <h3 className="footer__heading">Contact</h3>
            <div className="footer__contact">
              <p className="footer__contact-line">
                Phone: <a href="tel:0776315206" className="footer__link">0776315206</a> & <a href="tel:0785366455" className="footer__link">0785366455</a>
              </p>
              <p className="footer__contact-line">
                Email: <a href="mailto:info@jitihada.co.tz" className="footer__link">info@jitihada.co.tz</a>
              </p>
              <p className="footer__contact-line">
                Location: Posta
              </p>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© {new Date().getFullYear()} Jitihada Enterprises Company Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
