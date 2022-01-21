const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/dojo");

const blogSchema = mongoose.Schema({
  post: String
});

module.exports = mongoose.model('blog', blogSchema);