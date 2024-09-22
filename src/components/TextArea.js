import React, {useState} from 'react'


export default function TextArea(props) {

    const handleUpText=()=>{
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase","success","success")
      
           
   }
    const handleLowText=()=>{
        setText(text.toLowerCase())
        props.showAlert("Converted to Lowercase","success","success")    
   }

   const handleCopy=()=>{
    var text =document.getElementById("exampleFormControlTextarea1")
    text.select();
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard","success","success")

   }

   const handleClearText=()=>{
    setText("")
    props.showAlert("Textbox cleared","success","success")
   }
   
    const handleOnChange=(event)=>{
        setText(event.target.value)       
   }

  const [text,setText]= useState('');




  return (
    <>
    
      <div className="my-3 mx-5">
      <h1 className={`text-${props.mode=='dark'?'light':'dark'}`}>Enter Your Text</h1>
      <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" ></textarea>
      <button className="btn btn-primary my-3 mr-1" onClick={handleUpText}>Convert to Uppercase</button>
      <button className="btn btn-primary my-3 m-2" onClick={handleLowText}>Convert to Lowercase</button>
      <button className="btn btn-warning my-3 m-2" onClick={handleClearText}>Clear text</button>
      <button className="btn btn-info my-3 m-2" onClick={handleCopy}>Copy text</button>
      </div>

      <div className={`container my-3 mx-5 text-${props.mode=='dark'?'light':'dark'}`}>
        <h1 >Your text summary</h1>
        <p> Your text contains <span className='text-primary'>{text.split(" ").length}</span> words and <span className='text-warning'>{text.length}</span> characters</p>
        <p>The average reader can read your word in <span className='text-primary'>{1/238*text.split(" ").length}</span> minutes while reading silently.<br/> When reading aloud, the average reader can read your words in <span className='text-warning'>{1/183*text.split(" ").length} </span> minutes.</p>
        <h2>Preview</h2>
        <p className='text-success'>{text.length>0?text:"Enter something in the textbox above to preview here."}</p>
      </div>
     
    </>
  )
}
