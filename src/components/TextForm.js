import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = ()=>{
       let new_text = text.toUpperCase();
       setText(new_text);
       props.showAlert("Text Converted to upper case", "success");
    }
    const handleLoClick = ()=>{
        let new_text = text.toLowerCase();
        setText(new_text);
        props.showAlert("Text Converted to lower case", "success");
     }

     const handleClearClick = ()=>{
        let new_text = '';
        setText(new_text);
        props.showAlert("Text Cleared", "success");
     }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
       let getText = document.getElementById('floatingTextarea');
       getText.select();
       navigator.clipboard.writeText(getText.value);
       props.showAlert("Text Coppied", "success");
    }
    const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Space Removed", "success");
    }
  return (
    <>
    <div className= "container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>{props.heading}</h3>
        <div className="form-floating">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} placeholder="Leave a comment here" value = {text} id="floatingTextarea"></textarea>
        <label htmlFor="floatingTextarea">Write Text</label>
        <button className='btn btn-primary mt-2 mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mt-2' onClick={handleLoClick}>Convert to lowercase</button>
        <button className='btn btn-primary mt-2 mx-2' onClick={handleClearClick}>Clear</button>
        <button className='btn btn-primary mt-2 mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mt-2 mx-2' onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length } words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}  Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview"}</p>
    </div>
    </>
  )
}
