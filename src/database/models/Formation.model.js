import mongoose from 'mongoose';

const { Schema, model } = mongoose

const formationSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        sector: {
            type: String,
            enum: ['attack', 'defense', 'special teams'],
            default: 'attack'
        },
        description: {
            type: String,
            required: true,
        },
        imageURL: {
            type: String,
        },
        liveImage: {
            type: String,
        },
    },
    { timestamps: true }
);

export default model('Formation', formationSchema);
