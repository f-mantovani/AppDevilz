import User from '../models/User.model.js';

const UserClass = {
	createUser: async user => {
		const response = await User.create(user);

		return response;
	},

	findUserByEmail: async email => {
		const response = await User.findOne(email);

		return response;
	},

	deleteUserByEmail: async email => {
		const response = await User.deleteOne(email);

		return response;
	},

	update: async (id, updateInfo) => {
		const response = await User.findByIdAndUpdate(id, updateInfo, {
			new: true,
			runValidators: true,
			context: 'query',
		});

		return response;
	},
};

export default UserClass;
