import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {
    getUserReq,
    encryptPassword,
    validateUserInput,
    validateCredential,
} from './user.helperFunctions.js';

import User from '../database/services/user.service.js';

import logger from '../utils/logger.js';

const userControllers = {
    signup: async (req, res) => {
        try {
            const { name, email, password } = getUserReq(req);

            validateUserInput(email, password, name);

            const userFromDB = await User.findUserByEmail({email})

            validateCredential(userFromDB, '400', 'User already exists')

            const passwordHashed = await encryptPassword(password);

            const user = { name, email, password: passwordHashed };

            const newUser = await User.createUser({ user });

            return res.status(200).json({ test: 'success', newUser });
        } catch (error) {
            return res
                .status(error.status || 500)
                .json({ place: 'Creating User', 
                        error: error.message });
        }
    },
};

export default userControllers;
