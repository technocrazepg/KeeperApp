import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Note from './components/Note.js'
import CreateArea from './components/CreateArea.js'
import './components/styles.css'

function App() {
  const [notes, updateNotes] = useState([]);
  function addNote(newNote){
    updateNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteHandler(id){
    updateNotes(prevNotes =>{
      return  prevNotes.filter((singlenote,index)=>{
        return index != id;
      });
    })
  }
  return (
    <div className="">
      <Header />
      <CreateArea onAddBtn = {addNote}/>
      {notes.map((note,index) => {
        return (
          <Note key = {index} id = {index} title = {note.title} content = {note.content} deleteHandle = {deleteHandler}/>
        );
      })}
      
      {/* <Footer /> */}
    </div>
  );
}

export default App;
