var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/book-app");


module.exports.Book = require("./book.js");

module.exports.Author = require("./author.js");