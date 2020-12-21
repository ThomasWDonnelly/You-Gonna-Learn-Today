import React, { useState } from "react";
import logo from "./img/logo.svg";
import "./styles/App.css";
import FlashcardList from "./components/flashcardList";

function App() {
  const [flashcards, setFlashcards] = useState();
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

export default App;
