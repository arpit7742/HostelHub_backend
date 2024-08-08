import jwt from 'jsonwebtoken'

const generateToken = (id) => {  
  return jwt.sign({ id }, "I AM GAY", {
    expiresIn: '30d',
  })
}

export default generateToken
