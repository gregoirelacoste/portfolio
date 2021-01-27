import _ from "lodash";
import { themeType } from "../theme/switchTheme";
import { feedbackVar } from "../graphql/cache/variables/feedback.var";
import { useEffect } from "react";
import { themeVar } from "../graphql/cache/variables/theme.var";
const KonamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

const keylogger = (keys) => {
  console.info(
    "%c EasterEgg : Utilisez le clavier",
    "background: #04434f; color: #fff;padding:20px"
  );
  document.addEventListener("keydown", (e) => {
    if (keys.length === 0) {
      feedbackVar({
        error: false,
        message:
          "Séquence EasterEgg activée... Faites reset avec 'espace' ou  'entrée'",
        isOpen: true,
      });
    }

    keys.push(e.key);
    console.table(keys);

    if (keys.length > 10) {
      feedbackVar({
        error: true,
        message: "Séquence Echec, aidez-vous de la console ;)",
        isOpen: true,
      });
      console.clear();
      return (keys = []);
    }
    if (e.key === "Enter" || e.key === " ") {
      feedbackVar({
        error: false,
        message: "Séquence Reset, pensez Konami",
        isOpen: true,
      });
      console.clear();
      return (keys = []);
    }
    if (_.isEqual(keys, KonamiCode)) {
      themeVar({ type: themeType.pink });
      console.clear();
      console.info(
        "%c Pink mode activé...",
        "background: #e23bbe; color: #fff;padding:20px"
      );
      feedbackVar({
        error: false,
        message: "Bravo, le pink mode est activé !",
        isOpen: true,
      });
      return (keys = []);
    }

    return keys;
  });
};

const EasterEgg = () => {
  let keys = [];
  useEffect(() => keylogger(keys), []);
  return null;
};
export default EasterEgg;
