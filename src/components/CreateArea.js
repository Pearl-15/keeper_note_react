import React, {useState} from "react";

function CreateArea(props) {

  const[note, setNote] = useState({title:"",content:""});
 

  function handleChange(event){

    //create destructure object 
    const {name,value} = event.target;

    setNote(preValue=>{
      return {
        ...preValue,
        //covert name -> string type to variable name
        [name]:value
      }

    })

  }

  function submitNote(event){
    props.onAdd(note);  //pass note to the App
    setNote({title:"",content:""})
    event.preventDefault()
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
