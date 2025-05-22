// import { useLocation } from "react-router";
import "./QuestPage.css";
// import { useState } from "react";
// import { questsData } from "../../assets/data/quests-data";git

// interface Location {
//   pathname: string;
//   search: string;
//   hash: string;
//   state: unknown;
//   key: string;
// }

function QuestPage() {
  // const [isSubmitedAnswer, setIsSubmitedAnswer] = useState<boolean>(false);
  // const [isGoodAnswer, setIsGoodAnswer] = useState<boolean>(false);
  // const [textareaValue, SetTextareaValue] = useState("");
  // const [answer, setAnswer] = useState("");
  // const [nextQuestUnlocked, setNextQuestUnlocked] = useState<boolean>(false);

  // const location = useLocation();
  // const preciseLocation = (location: Location) => {
  //   let indexLastSlash = 0;
  //   for (let i = 0; i < location.pathname.length; i++) {
  //     if (location.pathname[i] === "/") {
  //       indexLastSlash = i + 1;
  //     }
  //   }
  //   return location.pathname.slice(indexLastSlash, location.pathname.length);
  // };

  // const preciseQuestData = questsData.data
  //   .filter((el) =>
  //     el.category.startsWith(preciseLocation(location).slice(0, 3)),
  //   )[0]
  //   .quests.filter((quest) => quest.id.includes(preciseLocation(location)))[0];
  return <></>;
}

export default QuestPage;
