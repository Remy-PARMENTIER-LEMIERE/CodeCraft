import { NavLink } from "react-router";
import "./Error404.css";

function Error404() {
    return (
        <article className="error-page">

            <h1>
                Oh non, il semblerait que vous vous soyez perdu
            </h1>
            <NavLink to="/">
                <button type="button">
                    Retour à l'accueil
                </button>
            </NavLink>
        </article>
    )
}

export default Error404;