import { useState } from "react";
import { List, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-bottom-4 px-3 py-3 border">
        <div className="d-flex justify-content-between align-items-center w-100">
          <span className="text-danger fs-4">
            Banjir<b className="text-black">Pedia</b>
          </span>
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            onClick={toggleMenu}
          >
            {!menuOpen ? <List size={25} /> : <X size={25} />}
          </button>
        </div>

        <ul className="navbar-nav fw-medium d-none d-lg-flex">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="btn btn-danger" to="/lapor">
              Lapor
            </Link>
          </li>
        </ul>

        {menuOpen && (
          <div className="mobile-menu d-lg-none">
            <ul className="navbar-nav fw-medium">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog" onClick={toggleMenu}>
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" onClick={toggleMenu}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="btn btn-danger"
                  to="/lapor"
                  onClick={toggleMenu}
                >
                  Lapor
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}
