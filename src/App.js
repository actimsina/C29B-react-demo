import { useState, useEffect } from "react";
import axios from 'axios'
import Note from "./components/Note";
import noteService from "./services/noteService";

function App() {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const getNotes = () => {
    noteService.getAllNotes()
      .then(response => {
        console.log(response.data)
        setNotes(response.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(getNotes, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(n => n.important === true)

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    const note = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    if (newNote !== '') {
      noteService.createNote(note)
        .then(response => {
          setNotes(notes.concat(response.data))
          setNewNote('')
        })
        .catch(err => console.log(err))
    }
  }

  const handleDelete = (id) => {
    alert(id)
    noteService.deleteNote(id)
      .then(response => {
        setNotes(notes.filter(n => n.id !== id))
      }).catch(err => console.log(err))
  }

  const handleImportance = (id) => {
    let targetNote = notes.find(n => n.id === id)
    targetNote = { ...targetNote, important: !targetNote.important }
    noteService.updateNote(id, targetNote)
      .then(response => {
        setNotes(notes.map(n => n.id === id ? response.data : n))
      }).catch(err => console.log(err))
  }

  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map(note =>
          <Note key={note.id}
            note={note}
            handleDelete={() => handleDelete(note.id)}
            handleImportance={() => handleImportance(note.id)}
          />
        )}
      </ul>

      <form>
        <input value={newNote} onChange={handleInputChange} />
        <button onClick={handleAdd}>add</button>
      </form>
    </>
  );
}

export default App;
