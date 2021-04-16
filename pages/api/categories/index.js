import mongoose from 'mongoose';
import Categories from 'models/Categories';
import Connection from 'database/mongoConnect';

export default async (req, res) => {
  
  switch (req.method) {
    case 'GET':
      all(req, res);
      break;
    case 'POST':
      store(req,res);
      break;
  
    default:
      break;
  }
}

const all = async (req, res) => {
  try {
    Connection();
    const categories = await Categories.find();
    res.status(200).json({ categories });
  } catch (error) {
    res.status(500).json({ message : error.message });
  }
}

const store = async (req, res) => {
  const { name } = req.body;
  try {
    Connection();
    const category = new Categories({ name });
    await category.save();
    
    res.status(200).json({ category });
  } catch (error) {
    res.status(500).json({ message : error.message });
  }
}