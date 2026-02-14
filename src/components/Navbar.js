import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const servicePages = [
  { label: 'Agricultural Inputs', path: '/agricultural-inputs' },
  { label: 'Industrial Chemical', path: '/industrial-chemical' },
  { label: 'Petroleum Transit', path: '/petroleum-transit' },
  { label: 'Clearance & Forwarding', path: '/clearance-forwarding' },
  { label: 'Auditing Services', path: '/auditing-services' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const mainLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/#about' },
    { label: 'Services', to: '/#services', hasDropdown: true },
    { label: 'Contact', to: '/#contact' },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          Jitihada Enterprises
        </Link>
        <ul className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
          {mainLinks.map((link) => (
            <li
              key={link.label}
              className={`navbar__item ${link.hasDropdown ? 'navbar__item--dropdown' : ''}`}
            >
              {link.hasDropdown ? (
                <>
                  <button
                    type="button"
                    className="navbar__link navbar__link--trigger"
                    onClick={() => setServicesOpen(!servicesOpen)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    {link.label}
                  </button>
                  <ul className={`navbar__dropdown ${servicesOpen ? 'navbar__dropdown--open' : ''}`}>
                    <li className="navbar__dropdown-item">
                      <Link to="/#services" className="navbar__dropdown-link" onClick={closeMenu}>
                        All Services
                      </Link>
                    </li>
                    {servicePages.map((service) => (
                      <li key={service.path} className="navbar__dropdown-item">
                        <Link
                          to={service.path}
                          className="navbar__dropdown-link"
                          onClick={closeMenu}
                        >
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  to={link.to}
                  className="navbar__link"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="navbar__toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
