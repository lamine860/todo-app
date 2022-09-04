"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const mongoose_1 = tslib_1.__importDefault(require("mongoose"));
const cors_1 = tslib_1.__importDefault(require("cors"));
const todos_1 = tslib_1.__importDefault(require("./routes/todos"));
const HOST = process.env.HOST;
const PORT = process.env.PORT;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_DB = process.env.MONGO_DB;
const app = (0, express_1.default)();
const mongoUrl = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(todos_1.default);
mongoose_1.default
    .connect(mongoUrl, {})
    .then(() => {
    app.listen(PORT);
    console.log(`Server runing on http://${HOST}:${PORT}`);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=app.js.map