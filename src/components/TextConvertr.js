import React, { useState } from "react";

export default function TextConvertr(props) {
  const [text, settext] = useState("");
  const handleUpClick = (event) => {
    settext(event.target.value);
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("success", "Converted to Upper case")
  };
  const handleLowClick = (event) => {
    settext(event.target.value);
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("success", "Converted to lower case")

  };
  const handleClear = (event) => {
    let newText = " ";
    settext(newText);
    props.showAlert("success", "Text is Cleared")
  };
  const handleChange = (event) => {
    settext(event.target.value);
  };
  const RemoveSpace = (event) => {
    let newtext = text.split(/[ ]+ /);
    settext(newtext.join(" "))
    props.showAlert("success", "Space is removed")
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("success", "Text is copied")
  }
  function countLetters(sentence) {
    let letterCount = 0;
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
      if (char.match(/[A-Za-z1-9]/)) {
        letterCount++;
      }
    }
    return letterCount;
  }
  return (
    <>
      <div>
        <div className="my-3 container">
          <h3>Enter Text To Manipulate</h3>
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="mybox"
            cols="20"
            rows="8"
            placeholder="Enter Text here"
          ></textarea>
        </div>
        <div className="container">
        <button type="Submit" className="btn btn-primary me-3 ms-3" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button type="Submit" className="btn btn-primary me-3" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button type="Submit" className="btn btn-primary me-3" onClick={handleClear}>
          Clear Text
        </button>
        <button type="Submit" className="btn btn-primary me-3" onClick={RemoveSpace}>
          Remove Space
        </button>
        <button type="Submit" className="btn btn-primary me-3" onClick={handleCopy}>
          Copy Text
        </button>
        <div className="container my-3">
        <h6>No. of lettors : {countLetters(text)}</h6>
        <h6>No. of words : {text.split(" ").filter((element)=>{return element.length!=0}).length}</h6>
        </div>
        </div>
      </div>
    </>
  );
}
