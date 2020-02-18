import jwt from 'jsonwebtoken'
import { JWT } from '../constants'

const generateAccessToken = (id, role) => {
    const payload = {
        id,
        role,
        type: JWT.access.type
    };
    const options = { expiresIn: JWT.access.expiresIn };
    return jwt.sign(payload, JWT.secret, options);
};

const generateRefreshToken = (id) => {
    const payload = {
        type: JWT.refresh.type,
        id,
    }
    const options = { expiresIn: JWT.refresh.expiresIn }
    return jwt.sign(payload, JWT.secret, options)
}

const generateTokenPair = (id, role) => {
    const refreshToken = generateRefreshToken(id);
    const accessToken = generateAccessToken(id, role);
    return { refreshToken, accessToken }
}

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    generateTokenPair,
};