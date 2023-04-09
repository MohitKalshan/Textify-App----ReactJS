import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
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
        <button className="btn btn-primary" onClick={handleUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          Convert to Lowercase
        </button>
      </div>
      <div className="container my-3">
        <h2>Summary</h2>
        {/* text.split("") provide an array */}
        <p> {text.split(" ").length} Word and {text.length} characters</p>
        <p> {0.08*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
