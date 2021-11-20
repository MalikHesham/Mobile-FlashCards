import { AsyncStorage } from "react-native";
export const APP_KEY = "UdaciFlashcards";

export const data = {
  JavaScript: {
    title: "JavaScript",
    questions: [
      {
        question: "What is node JS?",
        answer:
          "As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.",
      },
    ],
  },
  React: {
    title: "React",
    questions: [
      {
        question: "What is react used for?",
        answer:
          "React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.",
      },
      {
        question: "What does shadow DOM mean? ",
        answer:
          "The Shadow DOM is a browser technology designed primarily for scoping variables and CSS in web components. The virtual DOM is a concept implemented by libraries in JavaScript on top of browser APIs.",
      },
    ],
  },
};

function initialize() {
  AsyncStorage.setItem(APP_KEY, JSON.stringify(data));
  return data;
}

export function formatDeckResults(results) {
  return results === null ? initialize() : JSON.parse(results);
}
