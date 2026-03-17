const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-item">
      <div>
        <p>{note.text}</p>
        <small>
          {note.author} • {new Date(note.createdAt).toLocaleString()}
        </small>
      </div>

      <div>
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    </div>
  );
};

export default NoteItem;
