import mongoose from 'mongoose';

const { Schema } = mongoose;
const SubCategoriesSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  intendedSpend: {
    type: mongoose.Decimal128,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
    required: true
  }
});

export default mongoose.model('SubCategories', SubCategoriesSchema);