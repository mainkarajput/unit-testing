const mongoose = require('mongoose')

const todoListSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  todoStatus: {
    type: Boolean,
    default: false, 
  }
})
module.exports = mongoose.model('TodoTask', todoListSchema,'ToDoCollection')
