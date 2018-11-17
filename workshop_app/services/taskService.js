var taskDao = require("../daos/taskDao");

function getTasks(callback) {
    taskDao.getTasks(callback);
}

module.exports = {
    getTasks: getTasks
}