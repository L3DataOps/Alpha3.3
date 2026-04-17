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
  const [showTextbox, setShowTextbox] = useState(false);
  const [attachments, setAttachments] = useState([]);

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
    setShowTextbox(false);
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
    setShowTextbox(false);
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
    setShowTextbox(true);
  };

  // Render the Activity Notes section with a textarea for adding/editing notes and a list of existing notes. Each note displays its associated tags and has options to edit or delete it.
  return (
    <div className="activity-notes-card">
      <h2>Activity Notes</h2>
      <br></br>

      {/* TEXTBOX INPUT */}
      {showTextbox && (
        <div>
          <textarea
            placeholder="Write a note..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows="5"
            cols="95"
          />

          {/*ONCLICK BUTTONS*/}
          <div className="note-actions">
            {editingId ? (
              <button
                onClick={() => updateNote(editingId)}
                className="btn-primary"
              >
                Update
              </button>
            ) : (
              <button onClick={addNote} className="btn-primary">
                Save
              </button>
            )}

            <button
              className="btn-secondary"
              onClick={() => {
                setShowTextbox(false);
                setText("");
                setEditingId(null);
                setAttachments([]);
              }}
            >
              Cancel
            </button>

            {/* Attach Button */}
            <label className="btn-secondary-attach-btn">
              📎 Attach Files
              <input
                type="file"
                multiple
                hidden
                onChange={(e) => {
                  const files = Array.from(e.target.files);
                  setAttachments((prev) => [...prev, ...files]);
                }}
              />
            </label>
          </div>
        </div>
      )}

      {/*Adding Note Button*/}
      {!showTextbox && (
        <button className="add-note-btn" onClick={() => setShowTextbox(true)}>
          + Add Note
        </button>
      )}

      <br></br>

      {/* Displaying selected files */}
      {attachments.length > 0 && (
        <div className="attachment-list">
          {attachments.map((file, index) => (
            <div key={index} className="attachment-item">
              {file.name}
              <button
                className="remove-file"
                onClick={() =>
                  setAttachments(attachments.filter((_, i) => i !== index))
                }
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* NOTES LIST */}
      <div className="scroller">
        {sortedNotes.map((note) => (
          <div className="notes-card">
            <div className="note-header">
              <h3 className="note-author">{note.author}</h3>

              <div className="tag-container">
                {caseData.issueTags.map((tag, index) => (
                  <TagBubble key={index} tag={tag} />
                ))}
              </div>
            </div>
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
