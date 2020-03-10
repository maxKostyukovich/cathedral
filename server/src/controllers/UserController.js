import db from '../models'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { JWT } from "../constants";
import { generateTokenPair } from '../utils/generateToken'
import UnauthorizedError from '../errorHandlers/UnauthorizedError'
const User = db.User;
module.exports.createUser = async (req, res, next) => {
    const user = await User.create(req.body);
    res.send(user);
};

module.exports.loginUser = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const user = await User.findOne({where: {email}});
        if (!user) {
            return next(new UnauthorizedError("Invalid credentials"))
        }

        const access = await bcrypt.compare(password, user.password);
        if (access) {
            const tokenPair = generateTokenPair(user.id, user.role);
            res.send({
                user: {login: user.login, email: user.email},
                tokenPair
            });
        } else {
            next(new UnauthorizedError("Invalid credentials"))
        }
    } catch (e) {
        next(e);
    }
};
module.exports.refreshToken = async (req, res, next) => {
    const refreshToken = req.body.refreshToken;
    try {
        const payload = jwt.verify(refreshToken, JWT.secret);
        if(payload.type !== JWT.refresh.type){
           return next(new Error('Invalid token type'))
        }
        const user = await User.findByPk(payload.id);
        const tokenPair = generateTokenPair(user.id, user.role);
        res.send({ tokenPair })
    } catch(err){
       next(err);
    }
};