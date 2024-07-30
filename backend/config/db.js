import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://eshaan122:eshaan123@cluster0.vahaj8t.mongodb.net/APD'
    );
    console.log(` connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    // used to end a running process in nodeJS, 1 is for end with  failure and 0 for without failure
  }
};
export { connectDb };
