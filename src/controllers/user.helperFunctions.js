export const getUserReq = ({ body }) => {
    const payload = {

        name: body.name,

        email: body.email,
        
        password: body.password,

    }

    return payload
}

export const validateUserInput = (email, password, name) => {

    name = (typeof name !== 'undefined')

    if (name.length === 0 || email.length === 0 || password.length === 0){
        const error = new Error

        error.status = 400

        error.message = 'All fields are required'
    }

   
}