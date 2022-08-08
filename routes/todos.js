const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')
const todos = [];

router.get("", (req, res) => {
  return res.json(todos);
});

router.get("/:id", (req, res) => {
  const todo = todos.find((todo) => todo.id === req.params.id);
  return res.json(todo);
});

router.post("", (req, res) => {
  const { title } = req.body;
  const todo = {
    id: v4(),
    title,
    completed: false,
  };
  todos.push(todo);
  return res.json(todo);
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = !todo.completed;
  return res.json(todo);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((todo) => todo.id === id);
  todos.splice(todos.indexOf(todo), 1);
  return res.json(todos);
});

module.exports = router;