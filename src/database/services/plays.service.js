import Play from '../models/Play.model.js';

const PlayClass = {
	createPlay: async newPlay => {
		const response = await Play.create(newPlay);

		return response;
	},

	updatePlay: async (playId, updatedInfo) => {
		const response = await Play.findByIdAndUpdate(playId, updatedInfo, {
			new: true,
			runValidators: true,
			context: 'query',
		});

		return response;
	},

	getOnePlay: async playId => {
		const response = await Play.findById(playId);

		return response;
	},

	getAllPlays: async () => {
		const response = await Play.find();

		return response;
	},

	deleteOnePlay: async playId => {
		const response = await Play.findByIdAndDelete(playId);

		return response;
	},

	deleteManyPlays: async formationId => {
		const response = await Play.deleteMany({ formation: formationId });

		return response;
	},
};

export default PlayClass;
