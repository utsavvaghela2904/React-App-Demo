import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText]= useState("Input Your Text");
    // setText = ("Enter Your Text");

    return (
        <div className=" mx-5 my-5"> 
            <h1>{props.heading}</h1>
            <textarea class="form-control" id="exampleFormControlTextarea1"  rows="8" value={text}></textarea>
            <button className='btn btn-outline-success my-3'>Convert To Upper Care</button>
        </div>
         
    )
}
