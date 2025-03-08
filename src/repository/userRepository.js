import crudRepository from "./crudRepository.js";
import User from "../models/usersModels.js";

export const userRepository = {
    ...crudRepository(User),

    findUserByEmail : async function (email) {
        try {
            // Searching for a user in the database with the specified email
            const user = await User.findOne({ email });
            
            // Returning the user found, if any
            return user;
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    getUserById : async function (id) {
        try {
            const user = await User.findById(id)
            return user
        } catch (error) {
            console.log(error);
            throw error;
        }
    },

    findUserByEmailOrUsername: async function(email, username) {
        return await User.findOne({ $or: [{ email }, { username }] });
    },    
};