import { useLocation } from "react-router";
import "./Contenu.css";
import { questsData } from "../../assets/data/quests-data";
import Editor from "../../components/Editor/Editor";

interface Location {
  pathname: string;
  search: string;
  hash: string;
  state: unknown;
  key: string;
}

function Contenu() {

const location = useLocation();
const preciseLocation = (location: Location) => {
  let indexLastSlash = 0;
  for (let i = 0; i < location.pathname.length; i++) {
    if (location.pathname[i] === "/") {
      indexLastSlash = i + 1;
    }
  }
  return location.pathname.slice(indexLastSlash, location.pathname.length);
};

const preciseQuestData = questsData.data
  .filter((el) =>
    el.category.startsWith(preciseLocation(location).slice(0, 3)),
  )[0]
  .quests.filter((quest) => quest.id.includes(preciseLocation(location)))[0];


    // const preciseQuestData= ");data.filter((item) => item.category === "html" || item.category === "css
return (
  <section className="contenu">
    <h1>{preciseQuestData.title}</h1>
    {preciseQuestData.image && <img src={preciseQuestData.image.src} alt={preciseQuestData.image.alt} />}
  {
  preciseQuestData.paragraph.map((uniqueParagraph) => (<p key={preciseQuestData.paragraph.indexOf(uniqueParagraph)}>{uniqueParagraph}</p>))
  }
  <Editor />
  </section>
  );
}
export default Contenu;
