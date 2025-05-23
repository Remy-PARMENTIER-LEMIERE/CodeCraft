import { NavLink } from "react-router";
import "./ComingSoon.css"

export default function ComingSoon() {
    return (
        <article className="coming-soon">
            <h1>Cette page est en pleine création</h1>
            <img src="/src/assets/images/hammer.svg" alt="Under construction hammer" />
            <p>N'hésitez pas à passer régulièrement pour tester nos nouveaux exercices</p>
            <NavLink to="/">
                <button type="button">Retour à l'accueil</button>
            </NavLink>
        </article>
    )
} 