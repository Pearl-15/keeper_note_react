import React, {useState} from "react";

function CreateArea(props) {

  const[note, setNote] = useState({title:"",content:""});
  const[notes, setNotes] = useState([]);

  function addNote(event){
    console.log("submitted")
    const newNote = note
    setNotes(preValue =>{
      return [...preValue, newNote]
    })
    event.preventDefault();
  }

  function handleChange(event){

    const {name,value} = event.target;
    setNote(preValue=>{
      return {
        ...preValue,
        [name]:value
      }

    })
  }

  return (
    <div>
      <form onSubmit={props.onAdd}>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
