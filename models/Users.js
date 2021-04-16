import mongoose from 'mongoose';

const { Schema } = mongoose;
const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  }
});