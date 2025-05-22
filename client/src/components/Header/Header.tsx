import { NavLink } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header>
      <NavLink to="/"><img src="/src/assets/images/logo_codecraft.webp" alt="Logo CodeCraft" /></NavLink>
      <h2>CodeCraft</h2>
      <button type="button" className="burger-menu">
        <span />
      </button>
    </header>
  );
}

export default Header;
