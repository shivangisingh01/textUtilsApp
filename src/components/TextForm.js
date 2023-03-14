import React, { useState } from "react";

export default function TextForm(props) {
  
  const handleUpClick = ()=>{
   let newText = text.toUpperCase();
   setText(newText);
   props.showAlert("converted to upper-case", "success")
  }
  const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lower-case", "success")
  }
  const copyClipboard = ()=>{
   navigator.clipboard.writeText(text);
  }
  const handleOnChange = (event)=>{
    console.log(event);
    // target returns the element on which the event occured
   setText(event.target.value);
  }
  const removeSpace = () =>{
    setText(text.replace(/\s+/g, ''));
     
    }
  const removeText = () =>{
    setText("");
     
    }

  const [text, setText]  = useState('Enter your text here'); 
  return (
    <>
    <div className="container" style = {{color : props.theMode=== 'dark' ? 'white': 'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        
        <textarea
          className="form-control" style = {{backgroundColor : props.theMode=== 'dark' ? '#2c2e33': 'white', color : props.theMode=== 'dark' ? 'white': 'black'}}
          id="exampleFormControlTextarea1"
          rows="7" value = {text} onChange={handleOnChange}  // REACT doesnt watch all of its variables e.g. here in case of "text"
         ></textarea>
      </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-success mx-2 my-2" onClick={handleDownClick}>Convert to lowercase</button>
        <button className="btn btn-success mx-2 my-2" onClick={copyClipboard}>Copy to clipboard</button>
        <button className="btn btn-primary mx-2 my-2" onClick={removeSpace} >Remove space</button>
        <button className="btn btn-primary mx-2 my-2" onClick={removeText} >Clear Text</button>
    </div>
     <div className="container my-3" style = {{color : props.theMode=== 'dark' ? 'white': 'black'}}>
        <h2>Your Summmary</h2>
        <p>{text.split(" ").length} words {text.length} characters</p>
     </div>
    </>
  );
}
