export const getFormationReq = ({ body, params, user }) => {
	const payload = {
		name: body.name,

		sector: body.sector,

		description: body.description,

		imageURL: body.imageURL,

		liveImage: body.liveImage,

    formationId: params.formationId,

    isAdmin: user?.isAdmin || false,

    isCT: user?.isCT || false,

	};

	return payload;
};


