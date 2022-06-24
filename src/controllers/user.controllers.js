import {
    getUserReq,
    encryptPassword,
    validateUserInput,
    validateCredential,
    validateLogin,
    generateToken
} from './user.helperFunctions.js';

import User from '../database/services/user.service.js';

import logger from '../utils/logger.js';

const userControllers = {
    signup: async (req, res) => {
        try {
            const { name, email, password } = getUserReq(req);

            validateUserInput(email, password, name);

            const userFromDB = await User.findUserByEmail({ email });

            validateCredential(userFromDB, 400, 'User already exists');

            const passwordHashed = await encryptPassword(password);

            const user = { name, email, password: passwordHashed };

            const newUser = await User.createUser({ user });

            const userCreated = await User.findUserByEmail({ email });

            const userDisplay = {
                name: userCreated.name,
                email: userCreated.email,
            };

            return res.status(200).json({ userDisplay });
        } catch (error) {
            return res
                .status(error.status || 500)
                .json({ place: 'Creating User', error: error.message });
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = getUserReq(req);

            validateUserInput(email, password);
            
            const userFromDB = await User.findUserByEmail({ email });
            
            validateCredential(!userFromDB, 400, 'User and/or Password incorrect')

            const passwordCompare = await validateLogin(password, userFromDB.password);

            validateCredential(!passwordCompare, 400, 'User and/or Password incorrect');

            const payload = {
                userId: userFromDB._id,
                name: userFromDB.name,
                email: userFromDB.email
            }

            const token = await generateToken(payload);

            return res.status(200).json({ token })

        } catch (error) {
            return res.status(error.status || 500).json({
                "place": "Login",
                "error": error.message
            })
        }
    },
};

export default userControllers;
