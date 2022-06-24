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

export const validateCredential = (credential, errorCode, errorMessage) => {

    if (credential){

        const error = new Error

        error.status = errorCode

        error.message = errorMessage

        throw error

    }

}

export const encryptPassword = async (password) => {

    const salt = await bcrypt.genSalt(12)

    const hashed = await bcrypt.hash(password, salt)

    return hashed
}

export const validateLogin = async (password, passwordFromDB) => {

    const comparePassword = await bcrypt.compare(password, passwordFromDB)

    return comparePassword
    
}

export const generateToken = async (payload) => {

    const newToken = jwt.sign(payload, process.env.SECRET_HASH, {expiresIn: '1d'});

    return newToken

}