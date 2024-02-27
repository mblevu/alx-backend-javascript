const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databaseName = 'database.csv';
  const filePath = path.join(__dirname, databaseName);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
    } else {
      const students = data.split('\n').filter((line) => line.trim() !== '');

      res.setHeader('Content-Type', 'text/plain');
      res.send(`This is the list of our students:\n${students.join('\n')}`);
    }
  });
});

app.listen(1245);

module.exports = app;
