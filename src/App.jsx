import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";
import NotesList from "./components/NotesList.jsx";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dim";
  });

  const [notes, setNotes] = useState(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    return savedNotes || [];
  });

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.setAttribute("data-theme", "dim");
      localStorage.setItem("theme", "dim");
    } else {
      root.setAttribute("data-theme", "cmyk");
      localStorage.setItem("theme", "cmyk");
    }
  }, [darkMode]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="min-h-screen bg-base-100 transition-colors duration-500">
      <div className="container max-w-7xl mx-auto p-8 text-center text-base-content">
        <Header handleToggleDarkMode={() => setDarkMode(!darkMode)} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText.toLowerCase())
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />
      </div>
    </div>
  );
};

export default App;
