import "./Contenu.css";
import data from "../../assets/data/data";

function Contenu() {
    const preciseQuestData= ");data.filter((item) => item.category === "html" || item.category === "css
  return (
        <section className="contenu">
            {filteredData.map((item) => (
            <section key={item.id} className="card">
                <h2>Catégorie  : {item.category}</h2>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.paragraphe}</p>
            </section>
            ))}
    </section>
  );
}
export default Contenu;
