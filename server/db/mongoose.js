var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://florin:florin0@ds157078.mlab.com:57078/todoapp" || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
