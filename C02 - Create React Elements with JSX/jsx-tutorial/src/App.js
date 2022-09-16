import React from "react";
import "./App.css";

function App() {
  const greeting = "greeting";
  // const names = ["Atul Gawande", "Stan Sakai", "Barry Lopez"];
  const displayAction = false;

  const emojis = [
    {
      emoji: "😀",
      name: "grinning face",
    },
    {
      emoji: "🎉",
      name: "party popper",
    },
    {
      emoji: "💃",
      name: "woman dancing",
    },
  ];

  const displayEmojiName = (event) => alert(event.target.id);
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      {displayAction && <p>I am writing JSX</p>}

      {/*<div>
        {names.map((name) => (
          <div key={name}>{name}</div>
        ))}
        </div> */}
      
      <ul>
        {emojis.map((emoji) => (
          <li key={emoji.name}>
            <button onClick={displayEmojiName}>
              <span role="img" aria-label={emoji.name} id={emoji.name}>
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
