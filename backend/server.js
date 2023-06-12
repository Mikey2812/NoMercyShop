import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
app.use(cors());
app.use(express.static('public'));
//fileUpload
import fileUpload from 'express-fileupload';

//Database
import connectDB from './src/database/connect.js';
//Router
import indexRouter from './src/routes/index.js';

app.use(express.json());
app.use(fileUpload());
app.use('/api', indexRouter);

const port = process.env.PORT || 5000;
connectDB(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.listen(port, () => {
    console.log(`Server is listening on port ${port}...`);
});