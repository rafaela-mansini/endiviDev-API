import mongoose from 'mongoose';

const { Schema } = mongoose;
const SpendsSchema = new Schema({
  amount: {
    type: mongoose.Decimal128,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  intendedSpend: {
    type: mongoose.Decimal128,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  paidAt: {
    type: Date,
    default: Date.now
  },
  subCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SubCategories',
    required: true
  }
});

export default mongoose.model('Spends', SpendsSchema);