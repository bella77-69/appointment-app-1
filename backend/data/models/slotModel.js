const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const slotSchema = new Schema({
  slotTime: { 
    type: String, 
    require: true 
  },
  slotDate: {
    type: String, 
    require: true 
  }
})

const slotModel = mongoose.model('user', slotSchema);

module.exports = slotModel;