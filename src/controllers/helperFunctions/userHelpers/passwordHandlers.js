import bcrypt from 'bcrypt'

export const encryptPassword = async (password) => {

  const salt = await bcrypt.genSalt(12)

  const hashed = await bcrypt.hash(password, salt)

  return hashed
}

export const validateLogin = async (password, passwordFromDB) => {

  const comparePassword = await bcrypt.compare(password, passwordFromDB)

  return comparePassword
  
}