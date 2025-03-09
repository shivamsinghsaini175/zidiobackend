import { taskRepository } from "../repository/taskRepository.js";
import { userRepository } from "../repository/userRepository.js";

export const createTaskService = async function (taskData) {
    try {

        // Validate the assigned user exists
        const user = await userRepository.getUserById(taskData.assignedTo);
        if (!user) {
            throw new Error("User to assign task not found.");
        };

        // Prevent assigning tasks to admins
        if (user.usertype === 'admin') {
           throw new Error("Cannot assign tasks to another admin.");
        };

        const task = await taskRepository.create(taskData);
        return task;
    } catch (error) {
        console.log("Create Task service error", error);
        throw error;
    }
};