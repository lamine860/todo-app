import { Request, Response } from "express";
import Todo from "../../models/todo";
import { ITodo } from "../../types/todo";

export async function getTodos(_, res: Response): Promise<void> {
  try {
    const todos: ITodo[] = await Todo.find().sort("-createdAt");
    res.status(200).json({ todos });
  } catch (e) {
    throw e;
  }
}
export async function addTodo(req: Request, res: Response): Promise<void> {
  try {
    const body = req.body as Pick<ITodo, "name" | "description" | "status">;
    const todo: ITodo = new Todo({
      name: body.name,
      description: body.description,
      status: body.status,
    });
    const newTodo: ITodo = await todo.save();
    const todos: ITodo[] = await Todo.find().sort("-createdAt");
    res.status(201).json({ message: "Todo added!", todos, todo: newTodo });
  } catch (e) {
    throw e;
  }
}
export async function updateTodo(req: Request, res: Response): Promise<void> {
  try {
    const {
      params: { id },
      body,
    } = req;
    const todo: ITodo | null = await Todo.findByIdAndUpdate({ _id: id }, body);
    const todos: ITodo[] = await Todo.find().sort("-createdAt");
    res.status(200).json({ message: "Todo updated!", todos, todo: todo });
  } catch (e) {
    throw e;
  }
}
export async function deleteTodo(req: Request, res: Response): Promise<void> {
  try {
    const todo: ITodo | null = await Todo.findByIdAndDelete({
      _id: req.params.id,
    });
    const todos: ITodo[] = await Todo.find().sort("-createdAt");
    res.status(200).json({ message: "Todo deleted!", todos, todo: todo });
  } catch (e) {
    throw e;
  }
}

export async function deleteAllTodos(_, res: Response): Promise<void> {
  try {
    await Todo.deleteMany();
    res.status(200).send({ message: "All todos deleted!", todos: [] });
  } catch (e) {
    throw e;
  }
}
export async function completeAllTodos(_, res: Response): Promise<void> {
  try {
    await Todo.updateMany({
      status: true,
    });
    const todos: ITodo[] = await Todo.find().sort("-createdAt");
    res
      .status(200)
      .send({ message: "All todos marked as completed!", todos: todos });
  } catch (e) {
    throw e;
  }
}
