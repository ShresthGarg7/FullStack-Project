const mongoose = require("mongoose");

const reg_teach = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});

const reg_object = mongoose.model("reg_teach", reg_teach);
module.exports = reg_object;
