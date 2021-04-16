import mongoose from 'mongoose';

const { Schema } = mongoose;
const IncomesSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  amount: {
    type: mongoose.Decimal128,
    required: true
  },
  recieveAt: {
    type: Date,
    default: Date.now
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Providers',
    require: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true
  }
});