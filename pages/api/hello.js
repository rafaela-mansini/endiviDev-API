// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Connection from 'database/mongoConnect';
import Users from 'models/Users';

export default async (req, res) => {
  const { username } = req.body;
  console.log(username);
  Connection();
  const user = await new Users({username});
  await user.save();

  res.status(200).json({ user })
}
