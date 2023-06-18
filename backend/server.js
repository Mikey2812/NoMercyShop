import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import 'express-async-errors';
import morgan from 'morgan';
import cors from 'cors';

import bodyParser from 'body-parser';

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));


app.use(cors());
app.use(express.static('public'));
//fileUpload
import fileUpload from 'express-fileupload';

//Database
import connectDB from './src/database/connect.js';

// middleware
import notFoundMiddleware from './src/middlewares/not-found.js';
import errorHandlerMiddleware from './src/middlewares/error-handler.js';

//Router
import indexRouter from './src/routes/index.js';

app.use(express.json());
app.use(fileUpload());
app.use('/api', indexRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
    try {
      await connectDB(process.env.MONGO_URL);
      app.listen(port, () => {
        console.log(`Server is listening on port ${port}...`);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  start();