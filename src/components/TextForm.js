import React, { useState } from "react";

export default function TextForm(props) {
  // Convert to upper case
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  //   Convert to lower case
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  //   Capitalize text
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
      .join(" ");
    setText(newText);
  };
  //   Ṛemove extra spaces
  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
  };
  // copy to clipboard
//   const handleCopyText = () => {
//     navigator.clipboard.writeText(text);
//   };
  //   CLear text
  const handleClearText = () => {
    let newText = "";
    setText(newText);
  };
  // Text speaking
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  //   Reverse text
  const handleReverse = (event) => {
    /* Convert string to array*/
    let strArr = text.split("");
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
  };

  // take values from textarea
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // React Hooks
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
          ></textarea>
        </div>
        <div className="btn-group" role="group" >
          <button className="btn btn-primary mx-1" onClick={handleUpperCase}>
            Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleLowerCase}>
            Lowercase
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCapitalize}>
            Capitalize
          </button>
        </div>
        <button className="btn btn-secondary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        {/* <button className="btn btn-secondary mx-1" onClick={handleCopyText}>
          Copy
        </button> */}
        <button className="btn btn-warning mx-1" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-success mx-1" onClick={handleReverse}>
          Reverse
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearText}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Summary</h2>
        {/* text.split("") provide an array */}
        <p>
          {" "}
          {text.split(" ").length} Word and {text.length} characters
        </p>
        <p> {0.08 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
