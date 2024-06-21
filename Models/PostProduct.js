const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});
mongoose.models = {}

const Products = mongoose.model('Products', PostSchema);

module.exports = Products;
