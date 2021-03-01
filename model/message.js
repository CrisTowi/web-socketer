import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  data: {
    type: String,
    required: true
  },
});

mongoose.models = {};

const messageModel = mongoose.model('Message', messageSchema);

export default messageModel;
