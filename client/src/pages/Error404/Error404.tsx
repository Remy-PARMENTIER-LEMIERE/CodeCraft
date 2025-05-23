import { NavLink } from "react-router";
import "./Error404.css";

function Error404() {
  return (
    <article className="error-page">
      <h1>Oh non, il semblerait que vous vous soyez perdu</h1>
      <img src="/src/assets/images/not-found.svg" alt="404 Not found Error" />
      <NavLink to="/">
        <button type="button">Retour à l'accueil</button>
      </NavLink>
    </article>
  );
}

export default Error404;
