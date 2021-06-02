import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
function CreateArea(props) {
    const [isExpand, setIsExpand] = useState(false);
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    })
    function handleChange(event){
        const {name,value} = event.target;
        setNewNote(prevNote =>{
            return {
                ...prevNote,
                [name] : value
            };
        });
    }
    function submitNote(event){
        props.onAddBtn(newNote);
        setNewNote({
            title : "",
            content : "" 
        })
        event.preventDefault(); 
    }
    function expand(e){
        newNote.content === "" && newNote.title === "" && setIsExpand(prevValue =>{
            return !prevValue;
        })
    }
    return (
        <div>
            <form>
                {isExpand && <input onChange = {handleChange} name = "title" placeholder = "Title" value = {newNote.title} />}
                <textarea onClick = {expand} onChange = {handleChange} name = "content" placeholder = "Write a note..." value = {newNote.content} rows = {isExpand ? 3 : 1} />
                {isExpand && <button onClick = {submitNote}><AddIcon /></button>}
            </form>
        </div>
    );
}

export default CreateArea
