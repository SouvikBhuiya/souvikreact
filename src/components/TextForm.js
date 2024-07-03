import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Uppercase","success")
    }
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
        
    }
    const handlelowClick = () => {
        let newertext = text.toLowerCase();
        setText(newertext)
        props.showAlert(" Converted to Lowercase","success")
        document.title="souvikreact lowercase"
    }
    const handleclearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert(" All Text Clear","success")
    }
    const handleCopy = () => {
        let text = document.getElementById("MyBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied","success")
    
    }


    // text="New Text" wrong way to change the state
    // setText("New Text") right way to change the state
    return (
        <>
            <div className="container" style={{color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    {/* <label for="MyBox" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="6" style={{ backgroundColor: props.mode === "light" ? "white" : "#09211a", color: props.mode === "dark" ? "white" : "black" }}></textarea>
                </div>
                <button className="btn btn-primary " onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handlelowClick}>Convert to Lowercase</button>
                <button className="btn btn-danger" onClick={handleclearClick}> Clear</button>
                <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy Text</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>My text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.0076 * text.split(" ").length}Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in textbox to preview"}</p>
            </div>

        </>

    )
}
