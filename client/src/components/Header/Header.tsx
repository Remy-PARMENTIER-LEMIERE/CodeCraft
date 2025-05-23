import { NavLink } from "react-router";
import "./Header.css";

interface NavProps {
  toggleNavbar: () => void;
  isNavbarOpen: boolean;
}

function Header({ toggleNavbar, isNavbarOpen }: NavProps) {
  return (
    <header>
      <NavLink to="/">
        <img
          src="/src/assets/images/logo_codecraft.webp"
          alt="Logo CodeCraft"
        />
      </NavLink>
      <h2>CodeCraft</h2>
      <button
        type="button"
        className="burger-menu"
        onClick={toggleNavbar}
        aria-label="Toggle menu"
      >
        <span className={`${isNavbarOpen ? "show-nav" : "hide-nav"}`} />
      </button>
    </header>
  );
}

export default Header;
