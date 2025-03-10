import { createTaskService, deleteTaskService, updateTaskService } from "../service/taskService.js";

export const createTaskController = async function (req, res) {
    try {
        const data = { 
            assignedBy: req.user._id, 
            assignedTo: req.params.userId,
            deadline:  new Date(),
            ...req.body
        };

        const response = await createTaskService(data);
        res.status(201).send({
            success: true,
            message: "Task created and assigned",
            data: response
          });
    } catch (error) {
        console.error("Error in creating Task controller :", error);
        res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error: error.message
      });
    }
};

export const updateTaskController = async function (req, res) {
    try {
        const taskId = req.params.taskId;
        const statusToUpdate = req.body;

        const response = await updateTaskService(taskId, statusToUpdate);
        res.status(201).send({
            success: true,
            message: "Task Updated",
            data: response
          });
    } catch (error) {
        console.error("Error in updating Task controller", error);
        res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error: error.message
      });
    }
};

export const deleteTaskController = async function (req, res) {
    try {
        const taskId = req.params.taskId;

        const response = await deleteTaskService(taskId);
        res.status(201).send({
            success: true,
            message: "Task Deleted",
            data: response
        });
    } catch (error) {
        console.error("Error in deleting Task controller", error);
        res.status(500).send({
        success: false,
        message: "Internal Server Error",
        error: error.message
      });
    }
};