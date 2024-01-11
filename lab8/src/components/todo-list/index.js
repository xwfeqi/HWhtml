import "./style.css";
import ToDoItemComponent from "./todo-item";

const ToDoListComponent = ({ todos, onChangeTodo, onDeleteTodo }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <ToDoItemComponent
          todo={todo}
          key={todo.id}
          onChangeTodo={onChangeTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default ToDoListComponent;
