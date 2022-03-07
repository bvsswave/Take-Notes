const fs = require('fs')
const path = require('path');
const PORT = process.env.PORT || 3001;

const express = require('express');
const app = express();
const allNotes = require('./db/db.json');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());app.post('/api/notes', (req, res) => {
    const newNote = createNewNote(req.body, allNotes);
    res.json(newNote);
});
app.use(express.static('public'));

app.get('/api/notes',(req, res) => {
    res.json(allNotes);
});