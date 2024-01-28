// src/controllers/UserController.js
const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');

router.get('/users', async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
