import React from "react";
import Card from "./Card";
import emojipedia from "../emojipedia";
function createCard(emoji) {
  return (
    <Card
      name={emoji.name}
      key={emoji.id}
      emoji={emoji.emoji}
      meaning={emoji.meaning}
    />
  );
}

function App() {
  return (
    <>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createCard)}
    </>
  );
}

export default App;
