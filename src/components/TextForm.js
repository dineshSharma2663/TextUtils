import { useState } from "react";
import React from 'react';

function TextForm(props) {

    const [text, setText] = useState('Enter text');

    const handleUppercase = ()=> {
        console.log('handleUppercase clicked');
        setText(text.toUpperCase());
    }

    const handleLowercase = ()=> {
        console.log('handleLowerase clicked');
        setText(text.toLowerCase());
    }

    const clearText = ()=> {
        console.log('clearText clicked');
        setText('');
    }

    const handleChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className='container'>
            <h1>{props.title}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange}></textarea>
                <div className="container my-3">
                <button type="button" className="btn btn-primary mx-1" onClick={handleUppercase}>Convert to Upper Case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={handleLowercase}>Convert to Lower Case</button>
                <button type="button" className="btn btn-primary mx-1" onClick={clearText}>Clear Text</button>
                </div>
                
            </div>
            <div>
                <h1>Text summary</h1>
                <p>{text.split(" ").length} worder & {text.length} characters</p>
            </div>
        </div>
    );
}

export default TextForm;