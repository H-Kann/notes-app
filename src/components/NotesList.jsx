import Note from "./Note";
import AddNote from "./AddNote.jsx";
const NotesList = ({
  notes,
  handleAddNote,
  handleDeleteNote,
  handleEditNote,
}) => {
  return (
    <div className="grid [grid-template-columns:repeat(auto-fill,_minmax(250px,_1fr))] gap-4">
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          text={note.text}
          handleDeleteNote={handleDeleteNote}
          handleEditNote={handleEditNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};
export default NotesList;
