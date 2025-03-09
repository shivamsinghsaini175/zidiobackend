import { createTaskService } from "../service/taskService.js";

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