import Formation from '../models/Formation.model.js'

const FormationClass = {
    createFormation: async ( newFormation ) => {
        
        const response = await Formation.create( newFormation )
       
        return response
    },

    updateFormation: async (id, updatedFormation) => {
        const response = await Formation.findByIdAndUpdate(id, updatedFormation)

        return response
    },
};

export default FormationClass;