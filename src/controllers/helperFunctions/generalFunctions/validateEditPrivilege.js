export const validateEditPrivilege = (req, res, next) => {
	const { isAdmin, isCT } = req.user

	if (!isAdmin && !isCT) {
		const error = new Error

		error.status = 401;

    error.message = "You can't edit this information"

    throw error
	}

 next()

};
