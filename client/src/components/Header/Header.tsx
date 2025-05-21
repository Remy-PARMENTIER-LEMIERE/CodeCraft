import "./Header.css";

function Header() {
  return (
    <header>
      <img src="/src/assets/images/logo_codecraft.webp" alt="Logo CodeCraft" />
      <h2>CodeCraft</h2>
      <button type="button" className="burger-menu">
        <span />
      </button>
    </header>
  );
}

export default Header;
