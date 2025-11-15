import { useState } from "react";
import { MdSave } from "react-icons/md";
const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  return (
    <div className="shadow-sm/100 shadow-neutral hover:shadow-lg hover:shadow-primary hover:ring ring-primary rounded-2xl hover:-translate-y-1 transition-all min-h-[170px] duration-400 text-base-content dark:shadow-primary dark:hover:ring-primary dark:hover:shadow-primary">
      <textarea
        className="pt-1 pl-3 pr-3 w-full resize-none text-base-content focus:outline-none"
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="flex w-full justify-between">
        <small className="self-baseline-last ml-2 mb-2 text-black dark:text-white">
          {characterLimit - noteText.length} Remaining
        </small>
        <MdSave
          className="text-neutral mb-[18px] mr-3 hover:cursor-pointer hover:text-primary dark:text-accent"
          onClick={handleSaveClick}
          size="1.3em"
          title="Save"
        />
      </div>
    </div>
  );
};
export default AddNote;
