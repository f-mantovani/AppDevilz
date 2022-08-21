import { getUserReq } from './helperFunctions/userHelpers/userReq.js';
import { validateUserInput } from './helperFunctions/userHelpers/validateUserInput.js'
import { validateCredential } from './helperFunctions/userHelpers/validateCredentials.js'
import { encryptPassword, validateLogin } from './helperFunctions/userHelpers/passwordHandlers.js'
import { generateToken  } from './helperFunctions/userHelpers/generateToken.js'
import { handleError } from './helperFunctions/generalFunctions/errorHandlingFunction.js';

import User from '../database/services/user.service.js';

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
			handleError(res, error, 'Creating user');
		}
	},

	login: async (req, res) => {
		try {
			const { email, password } = getUserReq(req);

			validateUserInput(email, password);

			const userFromDB = await User.findUserByEmail({ email });

			validateCredential(!userFromDB, 400, 'User and/or Password incorrect');

			const passwordCompare = await validateLogin(password, userFromDB.password);

			validateCredential(!passwordCompare, 400, 'User and/or Password incorrect');

			const payload = {
				userId: userFromDB._id,
				name: userFromDB.name,
				email: userFromDB.email,
				isAdmin: userFromDB.isAdmin,
			};

			const token = await generateToken(payload);

			return res.status(200).json({ token });
		} catch (error) {
			handleError(res, error, 'Login');
		}
	},
};

export default userControllers;
