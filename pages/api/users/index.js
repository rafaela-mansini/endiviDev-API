import Connection from 'database/mongoConnect';
import Users from 'models/Users';

export default async (req, res) => {
  Connection();
  const users = await Users.find();
  res.status(200).json(users);
}