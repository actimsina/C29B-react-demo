import { useState } from "react";

function App(props) {

  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)


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
      important: Math.random() < 0.5,
      id: notes.length + 1
    }

    if (newNote !== '') setNotes(notes.concat(note))
    setNewNote('')
  }


  return (
    <>
      <h2>Notes</h2>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? 'important' : 'all'}
      </button>
      <ul>
        {notesToShow.map(note =>
          <li key={note.id}>
            <p>{note.content}</p>
            <p>{note.date}</p>
          </li>
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
