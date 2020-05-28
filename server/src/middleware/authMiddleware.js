import jwt from 'jsonwebtoken'
import { JWT } from "../constants";
import UnauthorizedError from '../errorHandlers/UnauthorizedError'

const accessTokenVerify = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if(!authHeader){
        return  next(new UnauthorizedError())
    }
    const accessToken = authHeader.replace('Bearer ', '');
    try {
        const payload = jwt.verify(accessToken, JWT.secret);
        if (payload.type !== JWT.access.type) {
            return next(new UnauthorizedError('Invalid token'))
        }
        req.payload = payload;
        next()
    }catch (err) {
        if(err instanceof jwt.TokenExpiredError){
            next(new UnauthorizedError('Token expired'));
        } else
        if (err instanceof jwt.JsonWebTokenError) {
            next(new UnauthorizedError('Invalid token'));
        } else {
            next(err);
        }
    }
};

const refreshTokenVerify = (req, res, next) => {
    const token = req.body.refreshToken;
    try {
        req.payload = jwt.verify(token, JWT.secret);
        next();
    }catch (err) {
        if(err instanceof jwt.JsonWebTokenError) {
            return next(new UnauthorizedError('Invalid token'));
        }
        if(err instanceof jwt.TokenExpiredError) {
            return next(new UnauthorizedError('Refresh token expired'))
        }
    }
};

module.exports = {
    accessTokenVerify,
    refreshTokenVerify
};
