import React, { useState } from "react";
import logo from "./img/logo.svg";
import "./styles/App.css";
import FlashcardList from "./components/FlashcardList";

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: "What is 1 + 2?",
    answer: "3",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 2,
    question: "What is 2 + 2?",
    answer: "4",
    options: ["1", "2", "3", "4"],
  },
];

export default App;
