import User from '../models/User.model.js'

const UserClass = {
    createUser: async ({user}) => {

        const response = await User.create(user)

        return response
        
    }
   
};

export default UserClass;