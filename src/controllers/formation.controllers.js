import Formation from '../database/services/formations.service.js';
import { getFormationReq } from './helperFunctions/formationHelpers/getFormationReq.js';
import { handleError } from './helperFunctions/generalFunctions/errorHandlingFunction.js';
import { validateEditPrivilege } from './helperFunctions/generalFunctions/validateEditPrivilege.js';


const formationController = {
    create: async (req, res) => {
		const { name, sector, description, imageURL, liveImage } = getFormationReq(req);

        try {
            const newFormation = await Formation.createFormation({ name, sector, description });
    
            res.status(200).json({ newFormation });
            
        } catch (error) {
            handleError(res, error, 'Creating formation')
        }

	},

    update: async (req, res) => {
        const { name, sector, description, imageURL, liveImage, formationId, isAdmin, isCT } = getFormationReq(req);

        try {
            validateEditPrivilege(isAdmin, isCT)

            const updatedFormation = await Formation.updateFormation()

           
        } catch (error) {
            handleError(res, error, 'updating formation')
        }

    }
};

export default formationController;
