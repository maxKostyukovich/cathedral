import db from '../models'
import bcrypt from 'bcryptjs'
import { generateAccessToken } from '../utils/generateToken'
import UnauthorizedError from '../errorHandlers/UnauthorizedError'
const User = db.User;
module.exports.createUser = async (req, res, next) => {
    const user = await User.create(req.body);
    res.send(user);
};

module.exports.loginUser = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({where: { email } });
        if(!user){
            return next(new UnauthorizedError("Invalid credentials"))
        }

        const access = await bcrypt.compare(password, user.password);
        if(access){
            const accessToken = generateAccessToken(user._id, user.role);
            res.send({
                user: { login: user.login },
                accessToken
            });
        } else{
            next(new UnauthorizedError("Invalid credentials"))
        }
    } catch(e){
        next(e);
    }
};