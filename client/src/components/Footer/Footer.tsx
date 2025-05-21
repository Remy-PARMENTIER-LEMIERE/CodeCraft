import "./Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; CodeCraft 2025</p>
      <a
        href="https://github.com/Remy-PARMENTIER-LEMIERE/CodeCraft"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/src/assets/images/github-mark.png" alt="logo GitHub" />
      </a>
      <a
        href="https://www.wildcodeschool.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/src/assets/images/LogoWildCodeSchool.png"
          alt="logo Wild Code School"
        />
      </a>
    </footer>
  );
}

export default Footer;
