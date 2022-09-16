import React, { Component } from "react";
import emoji from "./emoji.svg";

export default class Instructions extends Component {
  //* The render() method returns the JSX code that you want to display in the browser.
  render() {
    return (
      <div className="instructions">
        <img alt="laughing crying emoji" src={emoji} />
        <p>Click on an emoji to view the emoji short name.</p>
      </div>
    );
  }
}
