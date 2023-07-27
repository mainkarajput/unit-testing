const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const cors = require("cors")
const app = express();
app.use(cors())
app.use(express.json());
const PORT = process.env.PORT || 5500;

const TodoItemRoute = require('./routes/todoList');

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log("Database connected"))
    .catch(err => console.log(err))


app.use('/', TodoItemRoute);

app.listen(PORT, () => console.log("Server connected"));

module.exports = app