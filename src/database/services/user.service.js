import User from '../models/User.model.js'

const UserClass = {
    createUser: async ({user}) => {

        const response = await User.create(user)

        return response
        
    },

    findUserByEmail: async (email) => {

        const response = await User.findOne(email)

        console.log(response)

        return response
    }
   
};

export default UserClass;