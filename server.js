
const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

console.log("To update the branch")
console.log("To update the branch again")

app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));