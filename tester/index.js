import dotenv from 'dotenv';
import { existsSync } from 'fs';

const run = async () => {
  // load env file
  if (existsSync('.env')) {
    dotenv.config();
  }

  console.log(process.env.UI1_BASE_URL);
};

run().catch((err) => {
  console.error(err);
});
