var express = require('express');
var router = express.Router();
var taskService = require("../services/taskService");

/* GET home page. */
router.get('/', function(req, res, next) {
  taskService.getTasks(function(err, tasks) {
    res.send(tasks);  
  });
});

module.exports = router;
