import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  function handleHamburgerClick(id: string) {
    const navbarBurger = document.getElementById(id);
    if (navbarBurger !== null) {
      navbarBurger.classList.toggle('is-active');
      const target = navbarBurger.dataset.target;
      if (target !== undefined) {
        const navbarMenu = document.getElementById(target);
        if (navbarMenu !== null) {
          navbarMenu.classList.toggle('is-active');
          navbarMenu.classList.toggle('absolute');
          navbarMenu.classList.toggle('z-50');
        }
      }
    }
  }

  return (
    <div className="Navbar">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <span role="button" id="navbar-burger" className="navbar-burger"
            aria-label="menu" aria-expanded="false" data-target="navbar-menu"
            onClick={() => handleHamburgerClick('navbar-burger')}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>

        <div id="navbar-menu" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Home
            </Link>

            <Link className="navbar-item" to="/resume">
              Resume
            </Link>

            <Link className="navbar-item" to="/projects">
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
