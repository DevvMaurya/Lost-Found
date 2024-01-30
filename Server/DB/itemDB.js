const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/lostFoundDB');

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  userSelectedDate: {
    type: Date,
    required: true,
  },
  uploadedImage: {
    type: String,
    required: true,
  },
  contactDetails: {
    type: String,
    required: true,
  },
  handedOver: {
    type: Boolean,
    default: false,
  },
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;
