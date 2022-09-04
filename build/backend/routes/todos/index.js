"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../../controllers/todos");
const route = (0, express_1.Router)();
route.get("/todos", todos_1.getTodos);
route.post("/add-todo", todos_1.addTodo);
route.put("/edit-todo/:id", todos_1.updateTodo);
route.delete("delete-todo/:id", todos_1.deleteTodo);
exports.default = route;
//# sourceMappingURL=index.js.map