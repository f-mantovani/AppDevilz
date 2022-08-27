export const getFormationReq = ({ body, params, file}) => {
	const payload = {
		name: body.name,

		sector: body.sector,

		description: body.description,

		imageURL: body.imageURL,

		liveImage: body.liveImage,

    formationId: params.formationId,

		//configuration for the Cloudinary
		path: file ? file.path : null,

	};

	return payload;
};


