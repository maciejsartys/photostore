"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var env       = process.env.NODE_ENV || "development";
var config    = require(__dirname + '/../config/config.json')[env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

/*

var Sequelize = require('sequelize');
//var config    = require('config').database;  // we use node-config to handle environments

var Sequelize = require('sequelize');

var sequelize = new Sequelize('photoStore', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// load models
var models = [
    'Photo',
    'User'
];

models.forEach(function(model) {
    module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
(function(m) {
    m.Photo.belongsTo(m.User);
    m.User.hasMany(m.Photo);
})(module.exports);

// export connection
module.exports.sequelize = sequelize;
*/