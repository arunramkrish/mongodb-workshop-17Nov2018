var mongodb = require('./MongoDbUtil');
var dao = require("./baseDao")("tasks");
module.exports = dao;

function getTasks(callback) {
    dao.getByQuery({}, callback);
}
module.exports.getTasks = getTasks;