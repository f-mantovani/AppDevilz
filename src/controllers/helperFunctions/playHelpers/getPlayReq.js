export const getPlayReq = ({ body, params, file}) => {
	const payload = {
		name: body.name,

		formation: body.formation,

		description: body.description,

		playImage: body.playImage,

    playId: params.playId,

		// configuration for cloudinary
		path: file ? file.path : null,
	};

	return payload;
};