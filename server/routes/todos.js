const router = require("express").Router();
const Todo = require("../models/Todo");

//create new Toto
router.post("/", async (req, res) => {
    const newTodo = new Todo(req.body);
    try {
        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
    } catch (error) {
        return res.status(500).json(error);
    }
});

//update status Todo
router.put("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        const currStatus = todo.status;
        const nextStatus =
            currStatus === "coming"
                ? "doing"
                : currStatus === "doing"
                ? "done"
                : "done";
        await todo.updateOne({ status: nextStatus });
        return res.status(200).json("This todo has been changed status!!!");
    } catch (error) {
        return res.status(500).json(error);
    }
});

//update a Todo
router.put("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        await todo.updateOne({ $set: req.body });
        return res.status(200).json("This todo has been updated!!!");
    } catch (error) {
        return res.status(500).json(error);
    }
});

//delete existing Todo
router.delete("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);

        await todo.deleteOne();
        return res.status(200).json("This Todo has been deleted");
    } catch (error) {
        return res.status(500).json(error);
    }
});

//get a Todo
router.get("/:id", async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id);
        res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error);
    }
});

//get all todos
router.get("/", async (req, res) => {
    try {
        const listTodos = await Todo.find();
        res.status(200).json(listTodos);
    } catch (error) {
        return res.status(500).json(error);
    }
});

//get status Todo
router.get("/", async (req, res) => {
    try {
        const allTodos = await Todo.find();
        const statusTodos = allTodos.filter(
            (todo) => todo.status === req.query.status
        );
        res.status(200).json(statusTodos);
    } catch (error) {
        return res.status(500).json(error);
    }
});

module.exports = router;
