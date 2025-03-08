import { userRepository } from "../repository/userRepository.js";
import { verifyToken } from "../utils/authUtils.js";

export const isAuthenticated = async function (req, res, next) {
    // Check if JWT is passed in the header
    const token = req.headers['x-access-token'];

    if (!token) {
        return res.status(400).json({
            success: false,
            message: 'Token is required'
        });
    }

    // Verify the token
    try {
        const response = await verifyToken(token);

        console.log("Decoded JWT response:", response);

        if (!response) {
            return res.status(400).json({
                success: false,
                message: 'invalid auth token'
            });
        }

        const user = await userRepository.getUserById(response.id);
        // console.log("Decoded response.id:", response.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        // console.log('auth Middleware', user);
        // console.log('auth Middleware before', req);
        
        req.user = user.id; // user and response ID are same eg: "67499aa448b9f40d1bed1c84"

        // console.log('auth Middleware after', req.user);
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            success: false,
            message: 'Invalid token'
        });
    }
};
