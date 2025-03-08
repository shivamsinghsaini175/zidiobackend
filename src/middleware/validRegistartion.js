export const validRegistartion = function(req, res, next) {
    const {username, email, password, phone, address} = req.body;

        // Validation
        if(!username || !email || !password || !phone || !address) {
            return res.status(400).send({
                success: false,
                message: "Please Provide All Fields"
            });
        };

    next(); // Move to the next middleware/controller if validation passes
};