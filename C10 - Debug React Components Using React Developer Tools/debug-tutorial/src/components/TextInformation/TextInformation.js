import React, { useReducer } from "react";
import CharacterCount from "../CharacterCount/CharacterCount";
import WordCount from "../WordCount/WordCount";
import CharacterMap from "../CharacterMap/CharacterMap";

const reducer = (state, action) => {
  // Todo: reducer function take state and action as input and change the state
  return {
    ...state,
    [action]: !state[action],
  };
};

export default function TextInformation() {
  const [tabs, toggleTabs] = useReducer(reducer, {
    characterCount: true,
    wordCount: true,
    characterMap: true,
  });

  return (
    <div>
      <button onClick={() => toggleTabs("characterCount")}>
        Character Count
      </button>
      <button onClick={() => toggleTabs("wordCount")}>
        Word Count
      </button>
      <button onClick={() => toggleTabs("characterMap")}>
        Character Map
      </button>
      <CharacterCount show={tabs.characterCount}/>
      <WordCount show={tabs.wordCount}/>
      <CharacterMap show={tabs.characterMap}/>
    </div>
  );
}
