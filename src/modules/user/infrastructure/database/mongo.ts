import { connect } from 'mongoose';

const DB_URL = process.env.MONGO_URI;

const startDatabase = async () => {
  // TODO: load from env variables
  // await connect(DB_URL);
  await connect('mongodb://localhost:27017/notes');
  console.log('🚀 Database is running');
};

export default startDatabase;
