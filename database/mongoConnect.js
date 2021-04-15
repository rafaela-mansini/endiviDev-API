import mongoose from 'mongoose'

const connection = () => {
  mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if(err){
        console.log(err);
      }
      else{
        console.log('DB connected');
      }
    }
  )
}

export default connection