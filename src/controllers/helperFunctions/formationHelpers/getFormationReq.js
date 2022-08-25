export const getFormationReq = ({ body, params}) => {
	const payload = {
		name: body.name,

		sector: body.sector,

		description: body.description,

		imageURL: body.imageURL,

		liveImage: body.liveImage,

    formationId: params.formationId,

	};

	return payload;
};


