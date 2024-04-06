const express = require('express');
const toDoController = require('../controller/toDoController');

const router = express.Router();

router.post('/',toDoController.post);
router.get('/',toDoController.get);
router.get('/page/:page/size/:size',toDoController.get);
router.get('/:id',toDoController.getById);
router.delete('/:id',toDoController.remove);
router.put('/:id',toDoController.put);
router.patch('/:id',toDoController.patch);

module.exports = router;