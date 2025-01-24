/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cookieParser());

// CORS Configuration
app.use(
  cors({
    origin: ['http://localhost:5173'], // Allow frontend
    credentials: true, // Allow cookies
  })
);

// Handle preflight requests
app.options('*', cors());

// Application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hi Next Level Developer !');
});

// Global error handler
app.use(globalErrorHandler);

// 404 Not Found Middleware
app.use(notFound);

export default app;
