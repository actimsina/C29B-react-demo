const Note = (props) => {
    const { note, handleDelete, handleImportance } = props
    const label = note.important ? 'make not important' : 'make important'
    return (
        <li>
            <p>{note.content}</p>
            <p>{note.date}</p>
            <button onClick={handleDelete}>
                delete
            </button>
            <button onClick={handleImportance}>
                {label}
            </button>
        </li >
    )
}

export default Note