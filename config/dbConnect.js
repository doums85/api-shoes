import mongoose from 'mongoose';

const dbConnect = () => {
  mongoose
    .connect(
      'mongodb+srv://admin:admin@cluster0.whoer.mongodb.net/e-commerce?retryWrites=true&w=majority'
    )
    .then(() => console.log('MongoDB Connect'));
};

export default dbConnect;
