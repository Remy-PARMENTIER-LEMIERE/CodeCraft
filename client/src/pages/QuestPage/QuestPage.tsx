import { useLocation } from "react-router";
import "./QuestPage.css";
import { questsData } from "../../assets/data/quests-data";
import type { Location } from "../../types/types";

function QuestPage() {
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

  return (
    <main className="quest-page">
      <h1>{preciseQuestData.title}</h1>
      {preciseQuestData.image && (
        <img
          src={preciseQuestData.image.src}
          alt={preciseQuestData.image.alt}
        />
      )}
      {preciseQuestData.paragraph?.map((uniqueParagraph) => (
        <p key={preciseQuestData.paragraph.indexOf(uniqueParagraph)}>
          {uniqueParagraph}
        </p>
      ))}
      <iframe
        src={preciseQuestData.sandboxUrl}
        title={preciseQuestData.id}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
    </main>
  );
}
export default QuestPage;
