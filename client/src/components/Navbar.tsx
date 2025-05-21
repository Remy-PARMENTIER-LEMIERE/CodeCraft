import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [openHTML, setOpenHTML] = useState(false);
  const [openCSS, setOpenCSS] = useState(false);

  return (
    <section className="navbar">
      <section className="section">
        <section onClick={() => setOpenHTML(!openHTML)} className="title">
          HTML {openHTML ? "▾" : "▸"}
        </section>
        {openHTML && (
          <ul className="submenu">
            <li>Implémenter un titre</li>
            <li>Implémenter un paragraphe</li>
            <li>Implémenter une image</li>
          </ul>
        )}
      </section>

      <section className="section">
        <section onClick={() => setOpenCSS(!openCSS)} className="title">
          CSS {openCSS ? "▾" : "▸"}
        </section>
        {openCSS && (
          <ul className="submenu">
            <li>Changer la couleur de fond</li>
            <li>Arrondir les bords</li>
            <li>Mettre une hauteur</li>
            <li>Définir une largeur</li>
            <li>Centrer du texte</li>
            <li>Centrer latéralement un élément</li>
            <li>Centrer verticalement un élément</li>
          </ul>
        )}
      </section>
    </section>
  );
};

export default Navbar;
