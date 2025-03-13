import express from "express";
import { createTaskController, deleteTaskController, getAllTaskController, getTaskByUserController, updateTaskController } from "../../controller/taskController.js";
import { isAdmin, isAuthenticated } from "../../middleware/authValidation.js";

// Router object
const taskRouter = express.Router();

taskRouter.post('/create/:userId', isAuthenticated, isAdmin, createTaskController);

taskRouter.put('/status/:taskId', isAuthenticated, isAdmin, updateTaskController);

taskRouter.delete('/delete/:taskId', isAuthenticated, isAdmin, deleteTaskController);

taskRouter.get('/', isAuthenticated, isAdmin, getAllTaskController);

taskRouter.get('/:userId', isAuthenticated, getTaskByUserController);

export default taskRouter;