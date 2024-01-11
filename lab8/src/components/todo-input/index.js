import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const ToDoInputComponent = ({ onAddTodo, onSearch, onClearSearch }) => {
  const [title, setTitle] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleAddTodo = () => {
    onAddTodo(title);
    setTitle("");
  };

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleClearSearch = () => {
    onClearSearch();
    setSearchText("");
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="Add item..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="button" className="add" onClick={handleAddTodo}>
        Add
      </button>
      <button type="button" className="add-hide">
        Update
      </button>
      <button onClick={handleSearch}>Search</button>
      <div id="search">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <span onClick={handleClearSearch}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
        
      </div>
    </div>
  );
};

export default ToDoInputComponent;