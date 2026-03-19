/*
=============================================================================================
Change Log ( -- YYYY-MM-DD : Name - Message)
 -- Version changes and event history
=============================================================================================

-- 2026-03-19 : Marcos - Added comment tracking
*/

//Global Imports
import { useState, useEffect } from "react";
import ActivityNoteCard from "./ActivityNoteCard";
import "../css/ActivityNotes.css";
import TagBubble from "./TagBubble";

// This component renders the Activity Notes section of the Case Details page, allowing users to add, edit, and delete notes related to the case.
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

  // ADD a note to the case by sending a POST request to the backend API, then updating the local state with the new list of notes returned from the server.
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

  // UPDATE a note by sending a PUT request to the backend API with the updated text, then updating the local state with the new list of notes returned from the server.
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

  // DELETE a note by sending a DELETE request to the backend API, then updating the local state with the new list of notes returned from the server.
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

  // Render the Activity Notes section with a textarea for adding/editing notes and a list of existing notes. Each note displays its associated tags and has options to edit or delete it.
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
        cols="55"
      />
      <br></br>
      {editingId ? (
        <button onClick={() => updateNote(editingId)}>Update</button>
      ) : (
        <button onClick={addNote}>Add Note</button>
      )}

      {/* LIST */}
      <div className="scroller">
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
