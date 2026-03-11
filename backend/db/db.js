const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:NPI5nkuwVK6Iz7vp@cluster0.lmhrdbz.mongodb.net/simple-todo")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}