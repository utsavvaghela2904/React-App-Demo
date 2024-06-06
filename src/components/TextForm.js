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

    return (
        <div className=" mx-5 my-5"> 
            <h1>{props.heading}</h1>
            <textarea class="form-control" id="exampleFormControlTextarea1"  rows="8" value={text} onChange={HandleOnChange}></textarea>
            <button className='btn btn-outline-success my-3' onClick={HandleUpChange}>Convert To Upper Care</button>
        </div>
         
    )
}
