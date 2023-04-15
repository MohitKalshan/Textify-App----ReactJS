import React, { useState } from "react";

export default function TextForm(props) {
  // Convert to upper case
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase","success");
  };
  //   Convert to lower case
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to lowercase","success");
  };
  //   Capitalize text
  const handleCapitalize = () => {
    let newText = text
      .split(" ")
      .map((elem) => elem.charAt(0).toUpperCase() + elem.slice(1))
      .join(" ");
    setText(newText);
    props.showAlert("Text is capitalized","success");
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
    props.showAlert("Extra spaces are removed","success");
  };
  
  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared","success");
  };
  // Text speaking
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text to Speece On","success");
  };
  //   Reverse text
  const handleReverse = () => {
    /* Convert string to array*/
    let strArr = text.split("");
    strArr = strArr.reverse();
    /* Convert array to string*/
    let newText = strArr.join("");
    setText(newText);
    props.showAlert("Text is reversed","success");
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
          <h1 className="my-3">{props.heading}</h1>
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
          <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleUpperCase}>
            Uppercase
          </button>
          <button disabled={text.length==0} className="btn btn-primary  my-1" onClick={handleLowerCase}>
            Lowercase
          </button>
          <button disabled={text.length==0} className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>
            Capitalize
          </button>
        </div>
        <button disabled={text.length==0} className="btn btn-dark mx-1 my-1" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>
        {/* <button className="btn btn-secondary mx-1" onClick={handleCopyText}>
          Copy
        </button> */}
        <button disabled={text.length==0} className="btn btn-danger my-1" onClick={handleClearText}>
          Clear
        </button>
      </div>
      <div className="container my-1">
        <button disabled={text.length==0}  className="btn btn-warning" onClick={speak}>
          Speak
        </button>
        <button disabled={text.length==0} className="btn btn-success mx-1 my-1" onClick={handleReverse}>
          Reverse
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Summary</h2>
        <p>
          {text.split("/\s+/").filter((elem)=>{ return elem.length!==0}).length} Word and {text.length} characters
        </p>
        <p> {0.08 * text.split(" ").filter((elem)=>{ return elem.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"No preview!"}</p>
      </div>
    </>
  );
}
