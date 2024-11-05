const express = require('express');
const router = express.Router();

// Sample in-memory user data
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

// Get the list of users
router.get('/', (req, res) => {
  res.json(users);
});

// Get a specific user by ID
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Add a new user
router.post('/', (req, res) => {
  const newUser = {
    id: users.length + 1, // Simple ID assignment
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update a user by ID
router.put('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find((u) => u.id === userId);
  
  if (user) {
    user.name = req.body.name;
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

// Delete a user by ID
router.delete('/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const index = users.findIndex((u) => u.id === userId);
  
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

module.exports = router;
