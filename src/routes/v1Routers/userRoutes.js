import express from "express";
import { deleteUserController, getUserController, loginController, registerController, registerControllerForAdmin, updatePasswordController, updateUserController } from "../../controller/usersController.js";
import { validRegistartion } from "../../middleware/validRegistartion.js";
import { validLogin } from "../../middleware/validLogin.js";
import { isAuthenticated } from "../../middleware/authValidation.js";
import { validRegistartionAdmin } from "../../middleware/validRegistrationAdmin.js";

const userRouter = express.Router();

userRouter.post('/signup', validRegistartion, registerController);

userRouter.post('/signup/admin', validRegistartionAdmin, registerControllerForAdmin);

userRouter.post('/login', validLogin, loginController);

userRouter.get('/', isAuthenticated, getUserController);

userRouter.put('/update', isAuthenticated, updateUserController);

userRouter.put('/updatePassword', isAuthenticated, updatePasswordController);

userRouter.delete('/delete/:id', isAuthenticated, deleteUserController);

export default userRouter;