import mongoose from 'mongoose';

const { Schema, model } = mongoose

const playSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		formation: {
			type: Schema.Types.ObjectId,
			ref: 'Formation',
			required: true,
		},
		playImage: {
			type: String,
		},
	},
	{ timestamps: true }
);

export default model('Play', playSchema);
