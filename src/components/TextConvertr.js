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
    if (event.target.value===null) {
      props.showAlert("warning", "Please enter text")
    }
    else {
      settext(event.target.value);
      let newText = text.toLowerCase();
      settext(newText);
      props.showAlert("success", "Converted to lower case")
    }
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
    let newtext = text.split(/\s+/);
    settext(newtext.join(" "))
    props.showAlert("success", "Space is removed")
  }
  const handleCopy = () => {
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
        <div className="container" style={{display:'flex'}}>
          <button type="Submit" disabled={countLetters(text)===0}  className="btn  me-3 my-1" onClick={handleUpClick} style={{backgroundColor:`${props.btncolor}` ,color:'white'}}>
            Convert to UpperCase
          </button>
          <button type="Submit"  disabled={countLetters(text)===0} className="btn  me-3 my-1" onClick={handleLowClick} style={{backgroundColor:`${props.btncolor}` ,color:'white'}}>
            Convert to LowerCase
          </button>
          <button type="Submit" disabled={countLetters(text)===0}  className="btn  me-3 my-1" onClick={handleClear} style={{backgroundColor:`${props.btncolor}` ,color:'white'}}>
            Clear Text
          </button>
          <button type="Submit" disabled={countLetters(text)===0}  className="btn  me-3 my-1" onClick={RemoveSpace} style={{backgroundColor:`${props.btncolor}` ,color:'white'}}>
            Remove Space
          </button>
          <button type="Submit" disabled={countLetters(text)===0}  className="btn  me-3 my-1" onClick={handleCopy} style={{backgroundColor:`${props.btncolor}`,color:'white'}}>
            Copy Text
          </button>
          </div>
          <div className="container mx-20">
            <h6>No. of lettors : {countLetters(text)}</h6>
            <h6>No. of words : {text.split(/\s/).filter((element) => { return element.length != 0 }).length}</h6>
            <h6>No. of lines : {text.split(/\n/).filter((element) => { return element.length != 0 }).length}</h6>
          </div>
        </div>
    </>
  );
}
