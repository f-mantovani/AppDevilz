import mongoose from 'mongoose';

const playSchema = new mongoose.Schema(
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

export default mongoose.model('Play', playSchema);
