const router = require('express').Router()
const todoItemsModel = require('../models/todoListModel')

router.post('/api/item', async (req, res) => {
  try {
    const newItem = new todoItemsModel({
      content: req.body.content,
    })
    const saveItem = await newItem.save()
    res.status(200).json(saveItem)
  } catch (err) {
    res.json(err)
  }
})

router.get('/api/item', async (req, res) => {
  try {
    const allTodoList = await todoItemsModel.find({})
    res.status(200).json(allTodoList)
  } catch (err) { }
})

router.get('/api/item/:id', async (req, res) => {
  try {
    const allTodoList = await todoItemsModel.findById(req.params.id)
    res.status(200).json(allTodoList)
  } catch (err) { }
})

router.put('/api/item/:id', async (req, res) => {
  try {
    const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(updateItem);
  } catch (err) {
    res.json(err);
  }
})

router.delete('/api/item/:id', async (req, res) => {
  try {
    const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ messgae: 'Item Deleted' });
  } catch (err) {
    res.json(err);
  }
})

module.exports = router
