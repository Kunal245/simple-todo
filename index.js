const express = require("express");
const app = express();
const { createTodo } = require("./types");
const { todo } = require("./db/db");
app.use(express.json());

app.post("/todo", async function(req, res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.sucess){
        res.status(411).json({
            msg: "You send wrong inputs"
        })
    }
    //put in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: 'Stored todo in db '
    })
})

app.get("/todos", async function(req, res){
    const todos = await todo.find({});
    console.log(todos)
})

app.put("/completed", async function(req, res){
    const updatePayload = req.body
    const parsedPayload = createTodo.safeParse(updatePayload);
    if (!parsedPayload.sucess){
        res.status(411).json({
            msg: "You send wrong inputs"
        })
    }

    await todo.update({
        _id: req.body.id
    },{
        completed: true
    })

    res.json({
        msg: 'Marked as completed'
    })
})

app.listen(3000);