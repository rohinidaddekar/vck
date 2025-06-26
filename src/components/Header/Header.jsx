import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header>
        <Link to="/" className="logo">
          Vivekanand College
        </Link>

        <button
          className="hamburger-menu"
          onClick={() => setIsMobileOpen(true)}
        >
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
        </button>
        {isMobileMenuOpen ? (
          <>
            <div className="mobile-menus">
              <button
                className="close-button"
                onClick={() => setIsMobileOpen(false)}
              >
                X
              </button>

              <ul>
                <li>
                  <Link
                    to="/home"
                    className="link"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="link"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/courses"
                    className="link"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="link"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/admissions"}
                    className="button"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Apply Now!
                  </Link>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="right">
            <nav>
              <Link to="/home" className="link">
                Home
              </Link>
              <Link to="/about" className="link">
                About
              </Link>
              <Link to="/courses" className="link">
                Courses
              </Link>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </nav>

            <Link to={"/admissions"} className="button">
              Apply Now!
            </Link>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
