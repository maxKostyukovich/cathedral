import jwt from 'jsonwebtoken'
import { JWT } from '../constants'

const generateAccessToken = (id, role) => {
    const payload = {
        _id: id,
        role,
        type: JWT.access.type
    };
    const options = { expiresIn: JWT.access.expiresIn };
    return jwt.sign(payload, JWT.secret, options);
};

module.exports = {
    generateAccessToken,
};