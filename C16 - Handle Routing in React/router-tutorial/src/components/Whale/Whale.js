import React from "react";
import { useLocation } from "react-router-dom";
import Beluga from "./Beluga";
import Blue from "./Blue";

export default function Whale() {
  const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  // Use the .match method on the search string to pull out the type: search.match(/type=(.*)/). The parentheses inside the regular expression will capture the match into a results array. The first item in the array is the full match: type=beluga. The second item is the information from the parentheses: beluga.
  const type = match?.[1];
  console.log(type);
  return (
    <div>
      <h2>Whale</h2>
      {type === "beluga" && <Beluga />}
      {type === "blue" && <Blue />}
    </div>
  );
}
