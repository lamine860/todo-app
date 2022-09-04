"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
const tslib_1 = require("tslib");
const todo_1 = tslib_1.__importDefault(require("../../models/todo"));
async function getTodos(_, res) {
    try {
        const todos = await todo_1.default.find();
        res.status(200).json({ todos });
    }
    catch (e) {
        throw e;
    }
}
exports.getTodos = getTodos;
async function addTodo(req, res) {
    try {
        const body = req.body;
        const todo = new todo_1.default({
            name: body.name,
            description: body.description,
            status: body.status,
        });
        const newTodo = await todo.save();
        const todos = await todo_1.default.find();
        res.status(201).json({ message: "Todo added!", todos, todo: newTodo });
    }
    catch (e) {
        throw e;
    }
}
exports.addTodo = addTodo;
async function updateTodo(req, res) {
    try {
        const { params: { id }, body, } = req;
        const todo = await todo_1.default.findByIdAndUpdate({ _id: id }, body);
        const todos = await todo_1.default.find();
        res.status(200).json({ message: "Todo updated!", todos, todo: todo });
    }
    catch (e) {
        throw e;
    }
}
exports.updateTodo = updateTodo;
async function deleteTodo(req, res) {
    try {
        const todo = await todo_1.default.findByIdAndDelete({
            _id: req.params.id,
        });
        const todos = await todo_1.default.find();
        res.status(200).json({ message: "Todo deleted!", todos, todo: todo });
    }
    catch (e) {
        throw e;
    }
}
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=index.js.map