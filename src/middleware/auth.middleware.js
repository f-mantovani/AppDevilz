import jwt from 'jsonwebtoken';
import { handleError } from '../controllers/helperFunctions/generalFunctions/errorHandlingFunction.js';
import{ validateCredential } from '../controllers/helperFunctions/userHelpers/validateCredentials.js';

export const isAuthenticated = (req, res, next) => {
	try {
		const bearer  = req.get('Authorization');

    console.log(bearer)

		validateCredential(!bearer, 401, 'Access denied - unauthorized user');

		const token = bearer.split(' ')[1];

		const decodedToken = jwt.verify(token, process.env.SECRET_HASH);

		req.user = { ...decodedToken };

		next();
	} catch (error) {
		if (error.message === 'jwt expired') {
			handleError(res, error, 'JWT Middleware');
		}

		handleError(res, error, 'JWT Middleware');
	}
};
