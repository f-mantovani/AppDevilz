export const getPlayReq = ({ body, params }) => {
	const payload = {
		name: body.name,

		formation: body.formation,

		description: body.description,

		playImage: body.playImage,

    playId: params.playId,
	};

	return payload;
};