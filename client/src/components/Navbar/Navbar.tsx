import { useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";

interface OpenProps {
  isOpen: boolean;
}

const Navbar = ({ isOpen }: OpenProps) => {
  const [openHTML, setOpenHTML] = useState(false);
  const [openCSS, setOpenCSS] = useState(false);

  return (
    <section className={`navbar ${isOpen ? "open" : ""}`}>
      <section className="logo">
        <Link to="/">
          <img
            src="/src/assets/images/logo_codecraft.webp"
            alt="logo codecraft"
          />
        </Link>
      </section>
      <section className="section">
        <button
          type="button"
          onClick={() => setOpenHTML(!openHTML)}
          className="title"
        >
          HTML {openHTML ? "▾" : "▸"}
        </button>
        {openHTML && (
          <ul className="submenu">
            <li>Implémenter un titre</li>
            <li>Implémenter un paragraphe</li>
            <li>Implémenter une image</li>
          </ul>
        )}
      </section>

      <section className="section">
        <button
          type="button"
          onClick={() => setOpenCSS(!openCSS)}
          className="title"
        >
          CSS {openCSS ? "▾" : "▸"}
        </button>
        {openCSS && (
          <ul className="submenu">
            <li>Changer la couleur de fond</li>
            <li>Arrondir les bords</li>
            <NavLink to="/comingsoon">
              <li>Mettre une hauteur</li>
            </NavLink>
            <NavLink to="/comingsoon">
              <li>Définir une largeur</li>
            </NavLink>
            <li>Centrer du texte</li>
            <NavLink to="/comingsoon">
              <li>Centrer latéralement un élément</li>
            </NavLink>
            <NavLink to="/comingsoon">
              <li>Centrer verticalement un élément</li>
            </NavLink>
          </ul>
        )}
      </section>
    </section>
  );
};

export default Navbar;
