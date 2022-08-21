import jwt from 'jsonwebtoken'

export const generateToken = async (payload) => {

  const newToken = jwt.sign(payload, process.env.SECRET_HASH, {expiresIn: '1d'});

  return newToken

}