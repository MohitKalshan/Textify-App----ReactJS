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
  const handleReverse = () => {
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
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="6"
            style={{backgroundColor:props.mode==='dark'?'#c0c0c0':'white',color:props.mode==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <div className="btn-group" role="group">
          <button className="btn btn-primary" onClick={handleUpperCase}>
            Uppercase
          </button>
          <button className="btn btn-primary" onClick={handleLowerCase}>
            Lowercase
          </button>
          <button className="btn btn-primary" onClick={handleCapitalize}>
            Capitalize
          </button>
        </div>
        <button className="btn btn-dark mx-1 my-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        {/* <button className="btn btn-secondary mx-1" onClick={handleCopyText}>
          Copy
        </button> */}
        <button className="btn btn-danger mx-1" onClick={handleClearText}>
          Clear
        </button>
      </div>
      <div className="container my-2">
        <button className="btn btn-warning" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-success mx-2" onClick={handleReverse}>
          Reverse
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Summary</h2>
        <p>
          {text.split(" ").length} Word and {text.length} characters
        </p>
        <p> {0.08 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </>
  );
}
