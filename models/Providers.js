import mongoose from 'mongoose';

const { Schema } = mongoose;
const ProvidersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  cnpj: {
    type: String,
    required: true,
  }
});

