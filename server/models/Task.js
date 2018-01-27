const crypto = require('crypto');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  info: String,
  time: String,
  icon: String,
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true });

TaskSchema.methods.toJSON = function(){
  return {
    info: this.info,
    time: this.time,
    icon: this.icon,
    author: this.author,
  };
};

mongoose.model('Task', TaskSchema);