/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

// Component to display individual additional note items within the Case details portion
import "../css/ActivityNotes.css";

const NoteItem = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-card-temp">
      <div>
        <p>{note.text}</p>
        <small>
          {note.author} • {new Date(note.createdAt).toLocaleString()}
          {note.updatedAt && note.updatedAt !== note.createdAt && (
            <> • Last edited: {new Date(note.updatedAt).toLocaleString()}</>
          )}
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
