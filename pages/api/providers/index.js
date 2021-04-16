import Connection from 'database/mongoConnect';
import Providers from 'models/Providers';

export default async (req, res) => {

  switch (req.method) {
    case 'GET':
      all(req, res);
      break;
    case 'POST':
      store(req, res);
      break;
  
    default:
      break;
  }

}

const all = async (req, res) => {
  try {
    Connection();
    const providers = await Providers.find();
    res.status(200).json({ providers });
  } catch (error) {
    res.status(500).json({ message : error.message });
  }
}

const store = async (req, res) => {
  const { name, cnpj } = req.body;
  try {
    Connection();
    const provider = await new Providers({ name, cnpj });
    await provider.save();

    res.status(200).json({ provider });
  } catch (error) {
    res.status(500).json({ message : error.message });
  }
}