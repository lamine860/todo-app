"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const todoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    status: {
        type: Boolean,
        require: true,
    },
});
exports.default = (0, mongoose_1.model)("Todo", todoSchema);
//# sourceMappingURL=todo.js.map