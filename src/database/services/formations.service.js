import Formation from '../models/Formation.model.js';

const FormationClass = {
	createFormation: async newFormation => {
		const response = await Formation.create(newFormation);

		return response;
	},

	updateFormation: async (id, updatedFormation) => {
		const response = await Formation.findByIdAndUpdate(id, updatedFormation, {
			new: true,
			runValidators: true,
			context: 'query',
		});

		return response;
	},

	getAllFormations: async () => {
		const response = await Formation.find().populate({ path: 'plays', select: 'name -_id' });

		return response;
	},

	getOneFormation: async id => {
		const response = await Formation.findById(id).populate({ path: 'plays', select: 'name -_id' });

		return response;
	},

	deleteOneFormation: async id => {
		const response = await Formation.deleteOne({ _id: id });

		return response;
	},

	deleteFormations: async () => {
		const response = await Formation.deleteMany();

		return response;
	},
};

export default FormationClass;
