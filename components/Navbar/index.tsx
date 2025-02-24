import React, { useContext } from "react";
import { Header } from "../Layout/style";
import Link from "../ActiveLink";
import AppContext from "../Utils/context";
import { Logo, Moon, Icon } from "../Icons";

const Navbar = () => {
  const { show, handleopen, setTheme, closeShow, theme } = useContext(AppContext);

  return (
    <Header>
      <nav className="navbar navbar-expand-lg bg-light navbar-light">
        <div className="container">
          {/* Logo */}
          <Link href="https://portfolio-pco6.onrender.com/" className="navbar-brand" aria-label="Hanorah Home">
            <Logo />
          </Link>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler pr-0"
            type="button"
            onClick={handleopen}
            aria-label="Open Navigation Menu"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Navbar Links */}
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`} id="collapsibleNavbar">
            {/* Close Button for Mobile */}
            <button className="d-block d-md-none close-nav" onClick={handleopen} type="button">
              <Icon />
            </button>

            <ul className="navbar-nav ml-auto">
              {/* Home Link */}
              <li className="nav-item hover__bottom">
                <Link
                  href="https://portfolio-pco6.onrender.com/"
                  activeClassName="is-active"
                  className="nav-link"
                  id="cardHover"
                  onClick={closeShow}
                  aria-label="Go Home"
                  title="Home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Home
                </Link>
              </li>

              {/* Other Navigation Links */}
              <li className="nav-item hover__bottom">
                <Link href="/about" activeClassName="is-active" className="nav-link" id="cardHover" onClick={closeShow} aria-label="Go To About Page">
                  About
                </Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link href="/projects" activeClassName="is-active" className="nav-link" id="cardHover" onClick={closeShow} aria-label="Go To Projects Page">
                  Projects
                </Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link href="/resume" activeClassName="is-active" className="nav-link" id="cardHover" onClick={closeShow} aria-label="Go To Resume Page">
                  Resume
                </Link>
              </li>
              <li className="nav-item hover__bottom">
                <Link href="/contact" activeClassName="is-active" className="nav-link" id="cardHover" onClick={closeShow} aria-label="Go To Contact Page">
                  Contact
                </Link>
              </li>

              {/* Theme Toggle Button */}
              <li className="nav-item pl-md-3">
                <Link
                  href="#!"
                  className="nav-link nav-svg"
                  aria-label={`Turn On ${theme === false ? "Light" : "Dark"} Mode`}
                  onClick={setTheme}
                >
                  <Moon />
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default Navbar;
