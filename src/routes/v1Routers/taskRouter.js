import express from "express";
import { createTaskController } from "../../controller/taskController.js";
import { isAdmin, isAuthenticated } from "../../middleware/authValidation.js";

// Router object
const taskRouter = express.Router();

taskRouter.post('/create/:userId', isAuthenticated, isAdmin, createTaskController)

export default taskRouter;