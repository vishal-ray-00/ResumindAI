import express from 'express';
import cors from 'cors';
import logger from './middlewares/logger.middleware.js';
import {uploadErrorHandler} from './middlewares/error.middleware.js';

const app = express();

app.use(cors({
    origin: "https://resumindaiapp.vercel.app/",
}));

app.use(express.json());
app.use(logger);
app.use(uploadErrorHandler);

app.get('/', (req,res)=> {
    res.send('Resumind AI backend is running')
})

app.get('/api/test', (req,res)=>{
    res.json({
        message:"Backend Connected succesfully!"
    })
})

//Routes
import userRouter from "./routes/user.routes.js";
import resumeRouter from "./routes/resume.routes.js";
import analysisRouter from "./routes/analysis.routes.js";
import authRouter from "./routes/auth.route.js"

app.use("/api/users", userRouter);
app.use("/api/resumes", resumeRouter);
app.use("/api/analysis", analysisRouter);
app.use("/api/auth", authRouter);

export default app;