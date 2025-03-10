import express from "express";
import { createTaskController, deleteTaskController, updateTaskController } from "../../controller/taskController.js";
import { isAdmin, isAuthenticated } from "../../middleware/authValidation.js";

// Router object
const taskRouter = express.Router();

taskRouter.post('/create/:userId', isAuthenticated, isAdmin, createTaskController);

taskRouter.put('/status/:taskId', isAuthenticated, isAdmin, updateTaskController);

taskRouter.delete('/delete/:taskId', isAuthenticated, isAdmin, deleteTaskController);

export default taskRouter;