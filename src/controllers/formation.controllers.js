import Formation from '../database/services/formations.service.js';
import Play from '../database/services/plays.service.js';
import { getFormationReq } from './helperFunctions/formationHelpers/getFormationReq.js';
import { handleError } from './helperFunctions/generalFunctions/errorHandlingFunction.js';

const formationController = {
	create: async (req, res) => {
		const { name, sector, description, imageURL, liveImage } = getFormationReq(req);

		const formationInfo = { name, sector, description, imageURL, liveImage };

		try {
			const newFormation = await Formation.createFormation(formationInfo);

			res.status(201).json({ newFormation });
		} catch (error) {
			handleError(res, error, 'Creating formation');
		}
	},

	update: async (req, res) => {
		const { name, sector, description, imageURL, liveImage, formationId } = getFormationReq(req);

		try {
			const updatedInfo = { name, sector, description, imageURL, liveImage };

			const updatedFormation = await Formation.updateFormation(formationId, updatedInfo);

			res.status(200).json(updatedFormation);
		} catch (error) {
			handleError(res, error, 'Updating formation');
		}
	},

	getAll: async (req, res) => {
		try {
			const formations = await Formation.getAllFormations();

			res.status(200).json(formations);
		} catch (error) {
			handleError(res, error, 'Getting all formations');
		}
	},

	getOne: async (req, res) => {
		try {
			const { formationId } = getFormationReq(req);

			const formation = await Formation.getOneFormation(formationId);

			res.status(200).json(formation);
		} catch (error) {
			handleError(res, error, 'Getting one formation');
		}
	},

	deleteOne: async (req, res) => {
		try {
			const { formationId } = getFormationReq(req);

			const formation = await Formation.deleteOneFormation(formationId);
			await Play.deleteManyPlays(formationId);

			res.status(200).json(formation);
		} catch (error) {
			handleError(res, error, 'Deleting one formation');
		}
	},
};

export default formationController;
