import { useState } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import questsData from "../../assets/data/quests-data";

interface OpenProps {
  isOpen: boolean;
  handleCloseMenu: () => void;
}

const Navbar = ({ isOpen, handleCloseMenu }: OpenProps) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId);
  };

  return (
    <section className={`navbar ${isOpen ? "open" : ""}`}>
      <section className="logo">
        <Link to="/" onClick={handleCloseMenu}>
          <img
            src="/src/assets/images/logo_codecraft.webp"
            alt="logo codecraft"
          />
        </Link>
      </section>

      {questsData.data.map((category) => (
        <section className="section" key={category.id}>
          <button
            type="button"
            onClick={() => toggleCategory(category.id)}
            className="title"
          >
            {category.category.toUpperCase()}{" "}
            {openCategory === category.id ? "▾" : "▸"}
          </button>

          {openCategory === category.id && (
            <ul className="submenu">
              {category.quests.map((quest) => (
                <NavLink
                  to={quest.sandboxUrl ? `/quest/${quest.id}` : "/comingsoon"}
                  key={quest.id}
                  className="submenu-link"
                  onClick={handleCloseMenu}
                >
                  <li>{quest.title}</li>
                </NavLink>
              ))}
            </ul>
          )}
        </section>
      ))}
    </section>
  );
};

export default Navbar;
