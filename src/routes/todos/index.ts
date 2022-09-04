import { Router } from "express";
import {
  addTodo,
  completeAllTodos,
  deleteAllTodos,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../../controllers/todos";

const route = Router();

route.get("/todos", getTodos);
route.post("/add-todo", addTodo);
route.put("/edit-todo/:id", updateTodo);
route.delete("/delete-todo/:id", deleteTodo);
route.delete("/todos-purge", deleteAllTodos);
route.put("/todos-completed", completeAllTodos);

export default route;
