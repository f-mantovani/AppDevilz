import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserReq } from './user.helperFunctions.js';

import User from '../database/services/user.service.js'

import logger from '../utils/logger.js'

const userControllers = {
    signup: async (req, res) => {
        try {
           
            const { name, email, password } = getUserReq(req)
           
            const user = { name, email, password }

            const newUser = await User.createUser({user})
            
            return res.status(200).json({"test":"success", newUser})
            
        } catch (error) {
            return res.status(500).json({error})
        }
    }
}

export default userControllers

