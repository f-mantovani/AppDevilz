import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
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
            enum: ['QB', 'WR', 'OL', 'RB', 'TE', 'FB', 'DL', 'LB', 'CB', 'S']
        },
        shirtNumber: {
            type: Number,
        },
        isPlayerActive: {
            type: Boolean,
            default: true,
        },
        isCT: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isAccepted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

export default mongoose.model('User', userSchema)
