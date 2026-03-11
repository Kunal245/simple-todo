const express = require("express");
const app = express();
const { createTodo } = require("./types");
app.use(express.json());

app.post("/todo", function(req, res){
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.sucess){
        res.status(411).json({
            msg: "You send wrong inputs"
        })
    }
})

app.get("/todos", function(req, res){
    
})

app.put("/completed", function(req, res){
    const updatePayload = req.body
    const parsedPayload = createTodo.safeParse(updatePayload);
    if (!parsedPayload.sucess){
        res.status(411).json({
            msg: "You send wrong inputs"
        })
    }
})

app.listen(3000);