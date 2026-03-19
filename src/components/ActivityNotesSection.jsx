import { useState, useEffect } from "react";
import ActivityNoteCard from "./ActivityNoteCard";
import "../css/ActivityNotes.css";
import TagBubble from "./TagBubble";

const ActivityNotesSection = ({ caseData, currentUser }) => {
  const caseId = caseData._id;

  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    setNotes(caseData.caseNotes || []);
  }, [caseData]);

  const sortedNotes = [...notes].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );

  // ADD
  const addNote = async () => {
    if (!text.trim()) return;

    const res = await fetch(`/api/cases/${caseId}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, author: currentUser }),
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

  return (
    <div className="activity-notes-card">
      <h3>Activity Notes</h3>
      <br></br>

      {/* INPUT */}
      <textarea
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        cols="50"
      />
      <br></br>
      {editingId ? (
        <button onClick={() => updateNote(editingId)}>Update</button>
      ) : (
        <button onClick={addNote}>Add Note</button>
      )}

      {/* LIST */}
      <div>
        {sortedNotes.map((note) => (
          <div className="notes-card">
            <h3>{note.author}</h3>
            {caseData.issueTags.map((tag, index) => (
              <TagBubble key={index} tag={tag} />
            ))}
            <ActivityNoteCard
              key={note._id}
              note={note}
              onEdit={startEdit}
              onDelete={deleteNote}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityNotesSection;
