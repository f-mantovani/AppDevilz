import { Schema, model } from 'mongoose';

const formationSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        sector: {
            type: String,
            // Maybe another ENUMs here
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

export default model('Formation', formationSchema);
