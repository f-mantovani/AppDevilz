export const validateEditPrivilege = (isAdmin, isCT) => {
	if (!isAdmin && !isCT) {
		const error = new Error

		error.status = 401;

    error.message = "You can't edit this information"

    throw error
	}

  return
};
