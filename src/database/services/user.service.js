import User from '../models/User.model.js';

const UserClass = {
	createUser: async user => {
		const response = await User.create(user);

		return response;
	},

	findUser: async input => {
		const response = await User.findOne(input);

		return response;
	},

	deleteUser: async input => {
		const response = await User.deleteOne(input);

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
