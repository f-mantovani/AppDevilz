import Play from '../database/services/plays.service.js';
import Formation from '../database/services/formations.service.js';

import { handleError } from './helperFunctions/generalFunctions/errorHandlingFunction.js';
import { getPlayReq } from './helperFunctions/playHelpers/getPlayReq.js';

const playControllers = {
	create: async (req, res) => {
		const { name, formation, playImage } = getPlayReq(req);

		const playInfo = { name, formation, playImage };

		try {
			const newPlay = await Play.createPlay(playInfo);

			await Formation.updateFormation(formation, { $push: { plays: newPlay._id } });

			res.status(201).json(newPlay);
		} catch (error) {
			handleError(res, error, 'Creating a play');
		}
	},

	update: async (req, res) => {
		const { name, formation, playImage, playId } = getPlayReq(req);

		const updateInfo = { name, formation, playImage };

		try {
			const updatedPlay = await Play.updatePlay(playId, updateInfo);

			res.status(200).json(updatedPlay);
		} catch (error) {
			handleError(res, error, 'Updating a play');
		}
	},

	getOne: async (req, res) => {
		const { playId } = getPlayReq(req);

		try {
			const play = await Play.getOnePlay(playId);

			res.status(200).json(play);
		} catch (error) {
			handleError(res, error, 'Getting a play');
		}
	},

	getAll: async (req, res) => {
		try {
			const playbook = await Play.getAllPlays();

			res.status(200).json(playbook);
		} catch (error) {
			handleError(res, error, 'Getting all plays');
		}
	},
	deleteOne: async (req, res) => {
		const { playId } = getPlayReq(req);

		try {
			const deleted = await Play.deleteOnePlay(playId);
			console.log(deleted._id)
			await Formation.updateFormation(deleted.formation, { $pull: { plays: deleted._id } })

			res.status(200).json(deleted);
		} catch (error) {
			handleError(res, error, 'Deleting a play');
		}
	},
};

export default playControllers;
