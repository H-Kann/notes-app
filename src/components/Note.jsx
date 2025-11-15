import { useState } from "react";
import { MdDelete, MdEdit, MdSave, MdClose } from "react-icons/md";
import clsx from "clsx";
const Note = ({ id, text, handleDeleteNote, handleEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const saveEdit = () => {
    handleEditNote(id, editedText.trim());
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditedText(text);
    setIsEditing(false);
  };

  return (
    <div
      className={clsx(
        "shadow-sm/100",
        "shadow-neutral",
        "hover:shadow-xl/100",
        "hover:shadow-primary hover:ring ring-primary",
        "rounded-2xl",
        "text-base-content",
        "hover:-translate-y-1",
        "transition-all",
        "duration-400",
        "min-h-[170px]",
        "dark:shadow-primary",
        "dark:hover:ring-primary",
        "dark:hover:shadow-primary"
      )}
    >
      <div className="rounded-xl h-full w-full grid place-items-end p-4">
        {isEditing ? (
          <>
            <textarea
              className="textarea w-full min-h-[100px] p-2 rounded-md text-base-centent"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              autoFocus
            />
            <div className="flex gap-2 mt-2 justify-end">
              <MdSave
                onClick={saveEdit}
                className="hover:cursor-pointer hover:text-primary"
                size="1.5em"
                title="Save"
              />
              <MdClose
                onClick={cancelEdit}
                className="hover:cursor-pointer hover:text-red-500"
                size="1.5em"
                title="Cancel"
              />
            </div>
          </>
        ) : (
          <>
            <span className="place-self-center">{text}</span>
            <div className="flex gap-0.5">
              <MdEdit
                onClick={() => setIsEditing(true)}
                className="edit-icon self-end mb-0.5 hover:cursor-pointer hover:text-primary dark:text-accent dark:hover:text-primary"
                size="1.3em"
                title="Edit"
              />
              <MdDelete
                onClick={() => handleDeleteNote(id)}
                className="delete-icon self-end mb-0.5 mr-1.5 hover:cursor-pointer hover:text-primary dark:text-accent dark:hover:text-primary"
                size="1.3em"
                title="Delete"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Note;
