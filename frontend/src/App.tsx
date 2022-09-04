import React, { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import {
  addTodo,
  completeAllTodos,
  deleteAllTodos,
  deleteTodo,
  getTodos,
  updateTodo,
} from "./lib/API";

function App() {
  const [todos, setTodos] = useState<ITodo[] | []>([]);
  const fetchTodos = async () => {
    getTodos()
      .then(({ data: { todos } }) => {
        setTodos(todos);
      })
      .then((err) => console.log(err));
  };
  const handleSaveTodo = (e: React.FormEvent, formData: ITodo): void => {
    e.preventDefault();
    addTodo(formData)
      .then(({ status, data }) => {
        if (status !== 201) throw new Error("Error! Todo not savad!");
        setTodos(data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleUpdateTodo = async (todo: ITodo) => {
    updateTodo(todo)
      .then(({ status, data }) => {
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };
  const handleDeleteTodo = (id: string) => {
    deleteTodo(id)
      .then(({ status, data }) => {
        if (status !== 200) throw new Error("Todo not deleted!");
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };
  const completeTodos = async () => {
    completeAllTodos()
      .then(({ status, data }) => {
        console.log("complete");
        if (status !== 200) throw new Error("Todos didn't saved!");
        setTodos(data.todos);
      })
      .catch((err) => console.log(err));
  };
  const deleteTodos = async () => {
    deleteAllTodos()
      .then(({ status, data }) => {
        if (status !== 200) throw new Error("Todos didn't saved!");
        setTodos(data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <main className="App">
      <h1 className="title">My Todos list</h1>
      <AddTodo saveTodo={handleSaveTodo} />
      {todos.length > 0 && (
        <>
          <div className="card">
            <div className="card-footer flex-end">
              <button onClick={completeTodos} className="btn btn-complete">
                Mark all as complete
              </button>
              <button onClick={deleteTodos} className="btn btn-delete">
                Delete all
              </button>
            </div>
          </div>
          {todos?.map((todo: ITodo) => {
            return (
              <TodoItem
                key={todo._id}
                updateTodo={handleUpdateTodo}
                deleteTodo={handleDeleteTodo}
                todo={todo}
              />
            );
          })}
        </>
      )}
    </main>
  );
}

export default App;
