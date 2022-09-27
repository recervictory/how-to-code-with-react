import React, { memo, useMemo } from "react";
import PropTypes from "prop-types";

function itemize(text, transformer) {
    console.log(typeof text);
  const letters = text.split("")
    .filter((l) => l !== " ")
    .reduce((collection, item) => {
      const letter =  transformer ? transformer(item) : item;
      return {
        ...collection,
        [letter]: (collection[letter] || 0) + 1,
      };
    }, {});
  return Object.entries(letters).sort((a, b) => b[1] - a[1]);
}

function CharacterMap({ text, showExplanation , transformer}) {
    
    const characters = useMemo(() => itemize(text,transformer), [text, transformer]); // useMemo  anonymous function that returns the value of itemize(text) as the first argument and an array containing text as the second argument. 
    console.log(characters);
  return (
    <div>
      {showExplanation && (
        <p>This display a list of the most common characters.</p>
      )}
      Character Map:
      {characters.map((character) => (
        <div key={character[0]}>
          {character[0]}: {character[1]}
        </div>
      ))}
    </div>
  );
}

CharacterMap.propTypes = {
  text: PropTypes.string.isRequired,
  showExplanation: PropTypes.bool.isRequired,
  transformer: PropTypes.func,
};

CharacterMap.defaultProps = {
    transformer: null
}

export default memo(CharacterMap);
