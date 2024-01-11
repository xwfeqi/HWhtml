import React, { useState, useEffect } from "react";
import "./style.css";
import ToDoInputComponent from "./todo-input";
import ToDoListComponent from "./todo-list";

let nextId = 1;
const initialTodos = [{ id: 0, title: "Text of todo item" }];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  const handleAddTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        date: new Date().toDateString(),
      },
    ]);
  };

  const handleChangeTodo = (nextTodo) => {
    setTodos(todos.map((t) => (t.id === nextTodo.id ? nextTodo : t)));
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((t) => t.id !== todoId));
  };

  const handleSearch = (searchText) => {
    const filtered = todos.filter((todo) =>
      todo.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredTodos(filtered);
  };

  const handleClearSearch = () => {
    setFilteredTodos(todos);
  };

  return (
    <div className="App">
      <ToDoInputComponent
        onAddTodo={handleAddTodo}
        onSearch={handleSearch}
        onClearSearch={handleClearSearch}
      />
      <ToDoListComponent
        todos={filteredTodos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
}

export default App;
