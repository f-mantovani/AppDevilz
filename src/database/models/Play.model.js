import { Schema, model } from 'mongoose';

const playSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        formation: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Formation',
            },
        ],
        playImage: {
            type: String,
        },
    },
    { timestamps: true }
);

export default model('Play', playSchema);
