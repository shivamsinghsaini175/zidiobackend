import express from "express";
import testRouter from "./testRouter.js";
import userRouter from "./userRoutes.js";


// Router object
const v1Router = express.Router();

// Routes
v1Router.use('/test', testRouter);
v1Router.use('/users', userRouter);
export default v1Router;