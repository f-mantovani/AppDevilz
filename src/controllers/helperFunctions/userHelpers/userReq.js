export const getUserReq = ({ body, params, file }) => {
	const payload = {
		name: body.name,

		email: body.email,

		password: body.password,

		profileImage: body.profileImage,
        
		shirtNumber: body.shirtNumber,

		isPlayerActive: body.isPlayerActive,

		isCT: body.isCT,

		isAdmin: body.isAdmin,
        
		isAccepted: body.isAccepted,

		userId: params.userId,

		// configuration for cloudinary
		path: file ? file.path : null,
	};

	return payload;
};
