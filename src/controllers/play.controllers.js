import { handleError } from './helperFunctions/generalFunctions/errorHandlingFunction.js'

import Play from '../database/services/plays.service.js'

const playControllers = {
  create: async (req, res) => {
    try {
      
    } catch (error) {
      handleError(res, error, 'Creating a play')
    }
  },

  update: async (req, res) => {
    try {
      
    } catch (error) {
      handleError(res, error, 'Updating a play')
    }
  },
  getOne: async (req, res) => {
    try {
      
    } catch (error) {
      handleError(res, error, 'Getting a play')
    }
  },
  getAll: async (req, res) => {
    try {
      
    } catch (error) {
      handleError(res, error, 'Getting all plays')
    }
  },
  deleteOne: async (req, res) => {
    try {
      
    } catch (error) {
      handleError(res, error, 'Deleting a play')
    }
  },
  
};

export default playControllers