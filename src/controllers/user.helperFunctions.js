import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


export const getUserReq = ({ body }) => {
    const payload = {

        name: body.name,

        email: body.email,
        
        password: body.password,

    }

    return payload
}

export const validateUserInput = (email, password, name) => {

    name = (typeof name !== 'undefined') ? name : 'nameInput'

    if (name === '' || email === '' || password === '' ){

        const error = new Error

        error.status = 400

        error.message = 'All fields are required'

        throw error

    }

}

export const encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(12)

    const hashed = await bcrypt.hash(password, salt)

    return hashed
}