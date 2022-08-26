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

			const userFromDB = await User.findUser({ email });

			validateCredential(userFromDB, 400, 'User already exists');

			const passwordHashed = await encryptPassword(password);

			const user = { name, email, password: passwordHashed };

			const newUser = await User.createUser(user);

			const userCreated = await User.findUser({ email });

			const userDisplay = {
				name: userCreated.name,
				email: userCreated.email,
			};

			return res.status(201).json({ userDisplay });
		} catch (error) {
			handleError(res, error, 'Creating user');
		}
	},

	login: async (req, res) => {
		try {
			const { email, password } = getUserReq(req);

			validateUserInput(email, password);

			const userFromDB = await User.findUser({ email });

			validateCredential(!userFromDB, 400, 'User and/or Password incorrect');

			const passwordCompare = await validateLogin(password, userFromDB.password);

			validateCredential(!passwordCompare, 400, 'User and/or Password incorrect');

			const payload = {
				userId: userFromDB._id,
				name: userFromDB.name,
				email: userFromDB.email,
				isAdmin: userFromDB.isAdmin,
				isCT: userFromDB.isCT,
			};

			const token = await generateToken(payload);

			return res.status(200).json({ token });
		} catch (error) {
			handleError(res, error, 'Login');
		}
	},

	autoUpdate: async (req, res) => {
		const { name, email, password, profileImage, userId } = getUserReq(req)
		const updatedInfo = { name, email, password, profileImage }

		try {
			const sameUser = req.user.userId === req.params.userId

			validateCredential(!sameUser, 401, "You can't edit other's profile")

			const updatedPlayer = await User.update(userId, updatedInfo)

			res.status(200).json(updatedPlayer)
		} catch (error) {
			handleError(res, error, 'Auto updating')
		}
	},

	staffUpdate: async (req, res) => {
		const { shirtNumber, isPlayerActive, isCT, isAdmin, isAccepted, userId } = getUserReq(req)
		const updatedInfo = { shirtNumber, isPlayerActive, isCT, isAdmin, isAccepted }
		
		try {
			const updatedPlayer = await User.update(userId, updatedInfo)

			res.status(200).json(updatedPlayer)
		} catch (error) {
			handleError(res, error, 'Staff update')
		}
	},




};

export default userControllers;
