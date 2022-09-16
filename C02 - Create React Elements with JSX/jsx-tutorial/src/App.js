import React from "react";
import "./App.css";

function App() {
  const greeting = "greeting";

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
      <p>I am writing jsx</p>
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
