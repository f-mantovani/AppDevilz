import { handleError } from "../controllers/helperFunctions/generalFunctions/errorHandlingFunction.js";

export const validateEditPrivilege = (req, res, next) => {
	const { isAdmin, isCT } = req.user;

	try {
		if (!isAdmin || !isCT) {
			const error = new Error();
	
			error.status = 401;
	
			error.message = "You can't edit this information";
	
			throw error;
		}
		next();
		
	} catch (error) {
		handleError(res, error, 'Edit privilege middleware')
	}


};
