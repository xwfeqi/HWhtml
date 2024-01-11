import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import React, { useState } from "react";

const ToDoItemComponent = ({ todo, onChangeTodo, onDeleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    onChangeTodo({
      ...todo,
      title: editedText,
    });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <span className="span-button" onClick={handleUpdate}>
            Update
          </span>
        </>
      ) : (
        <>
          <span className="todo-text">{todo.title}</span>
          <span className="span-button" onClick={handleEdit}>
            <FontAwesomeIcon icon={faPen} />
          </span>
        </>
      )}
      <span className="span-button" onClick={() => onDeleteTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
};

export default ToDoItemComponent;
