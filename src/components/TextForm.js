import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]= useState("Input Your Text");
    // setTextnp("Enter Your Text");

    const HandleOnChange = (event) => {
        // console.log("On change"); 
        setText(event.target.value)

    }

    const HandleUpChange = () => {
        // console.log("Btn Click");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const HandleLowerChange = () => {
        // console.log("Btn Click");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const HandleSpeak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }
    
    const HandleClear = () => {
        let newText = "";
        setText(newText);
    }

    return (
        <div>
            <div className="container my-5"> 
            <h1>{props.heading}</h1>
            <textarea className="form-control" id="exampleFormControlTextarea1"  rows="8" value={text} onChange={HandleOnChange}></textarea>
            <button className='btn btn-outline-primary mt-3' onClick={HandleUpChange}>Convert To Upper Care</button>&nbsp;&nbsp;&nbsp;  
            <button className='btn btn-outline-info mt-3' onClick={HandleLowerChange}>Convert To Lower Care</button>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-outline-success mt-3' onClick={HandleSpeak}>Speak</button>&nbsp;&nbsp;&nbsp;
            <button className='btn btn-outline-danger mt-3' onClick={HandleClear}>Clear</button>&nbsp;&nbsp;&nbsp;
        </div>

        <div className='container'>
            <h2>Youe Text Summary</h2>
            <p>{text.split("").length} Words</p>
            <p>{text.length} Characters</p>
            <p>{0.008*text.split("").length} Reading Time</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </div>
         
    )
}
