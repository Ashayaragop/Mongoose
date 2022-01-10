var mongoose = require('mongoose');
var uri = 'mongodb://localhost:27017/course';

module.exports = function() 
{
    var db = mongoose.connect(uri);
    console.log('DB Connection');
    require('../models/models.courses');
    return db;
};