import { Schema, model } from 'mongoose';

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        },
        password: {
            type: String,
            required: true,
        },
        profileImage: {
            type: String,
        },
        position: {
            type: String,
            // Here maybe it's a better option to use ENUMs
        },
        shirtNumber: {
            type: Number,
        },
        player: {
            type: Boolean,
        },
        techinicalStaff: {
            type: Boolean,
        },
        administration: {
            type: Boolean,
        },
    },
    { timestamps: true }
);

export default model('User', userSchema)
