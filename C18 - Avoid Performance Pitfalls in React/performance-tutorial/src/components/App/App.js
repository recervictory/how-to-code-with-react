import React, { useState, useCallback, useReducer } from "react";
import "./App.css";
import CharacterMap from "../CharacterMap/CharacterMap";

function App() {
  const [text, setText] = useState("");
  const [showExplanation, toggleExplanation] = useReducer(
    (state) => !state,
    false
  );
  const transformer = useCallback((item) => item.toLowerCase(), []);
  return (
    <div className="wrapper">
      <label htmlFor="text">
        <p>Add Your Text Here:</p>
        <textarea
          id="text"
          name="text"
          rows="10"
          cols="100"
          onChange={(event) => setText(event.target.value)}
        ></textarea>
      </label>
      <div>
        <button onClick={toggleExplanation}>Show Explanation</button>
      </div>
      {showExplanation && (
        <p>This displays a list of the most common characters.</p>
      )}
      <CharacterMap
        text={text}
        showExplanation={showExplanation}
        transformer={transformer}
      />
    </div>
  );
}

export default App;
