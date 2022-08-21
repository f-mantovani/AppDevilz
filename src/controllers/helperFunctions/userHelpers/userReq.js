
export const getUserReq = ({ body }) => {
    const payload = {

        name: body.name,

        email: body.email,
        
        password: body.password,

    }

    return payload
}




