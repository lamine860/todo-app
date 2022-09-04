import React from "react";
import "./TodoItem.css";
type Props = TodoProps & {
  updateTodo: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
};
const TodoItem: React.FC<Props> = function ({ todo, updateTodo, deleteTodo }) {
  const checkTodo = todo.status ? "card-title line-through" : "card-title";
  return (
    <div className="card">
      <div className="card-body">
        <h2 className={checkTodo}>{todo.name}</h2>
        <p className={`card-text ${todo.status ? "line-through" : ""}`}>
          {todo.description}
        </p>
      </div>
      <div className="card-footer">
        <button
          onClick={() => updateTodo(todo)}
          className={todo.status ? "btn  btn-hidden" : "btn btn-complete"}
        >
          complete
        </button>
        <button
          onClick={() => deleteTodo(todo._id)}
          className="btn btn-delete "
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
