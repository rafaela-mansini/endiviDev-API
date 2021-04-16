import mongoose from 'mongoose';

const { Schema } = mongoose;
const UsersSchema = new Schema({
  username: {
    type: String,
    required: true
  }
});

export default mongoose.model('Users', UsersSchema);