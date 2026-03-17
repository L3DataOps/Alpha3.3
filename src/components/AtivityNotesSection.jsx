import { useState, useEffect } from "react";
import NoteItem from "./NoteItem";
import "../css/CaseCard.css";

const ActivityNotesSection = ({ caseData }) => {
  const caseId = caseData._id;

  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setNotes(caseData.caseNotes || []);
  }, [caseData]);

  // ADD
  const addNote = async () => {
    if (!text.trim()) return;

    const res = await fetch(`/api/cases/${caseId}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, author: "Current User" }),
    });

    const updatedNotes = await res.json();
    setNotes(updatedNotes);
    setText("");
  };

  // UPDATE
  const updateNote = async (noteId) => {
    const res = await fetch(`/api/cases/${caseId}/notes/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const updatedNotes = await res.json();
    setNotes(updatedNotes);
    setEditingId(null);
    setText("");
  };

  // DELETE
  const deleteNote = async (noteId) => {
    const res = await fetch(`/api/cases/${caseId}/notes/${noteId}`, {
      method: "DELETE",
    });

    const updatedNotes = await res.json();
    setNotes(updatedNotes);
  };

  const startEdit = (note) => {
    setEditingId(note._id);
    setText(note.text);
  };

  console.log("NOTES COMPONENT RENDERED", caseData);

  return (
    <div className="activity-notes-card">
      <h3>Activity Notes</h3>

      {/* INPUT */}
      <textarea
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {editingId ? (
        <button onClick={() => updateNote(editingId)}>Update</button>
      ) : (
        <button onClick={addNote}>Add Note</button>
      )}

      {/* LIST */}
      <div className="notes-list">
        {notes.map((note) => (
          <NoteItem
            key={note._id}
            note={note}
            onEdit={startEdit}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityNotesSection;
