
export const validateUserInput = (email, password, name) => {

  name = (typeof name !== 'undefined') ? name : 'nameInput'

  if (name === '' || email === '' || password === '' ){

      const error = new Error

      error.status = 400

      error.message = 'All fields are required'

      throw error

  }

}