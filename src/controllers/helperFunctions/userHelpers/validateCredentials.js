export const validateCredential = (credential, errorCode, errorMessage) => {

  if (credential){

      const error = new Error

      error.status = errorCode

      error.message = errorMessage

      throw error

  }

}