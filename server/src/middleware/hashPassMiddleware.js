import bcrypt from 'bcryptjs'
import { SALT } from "../constants";

module.exports = (req, res, next) => {
  if(req.body.password){
      bcrypt.genSalt(SALT, (err, salt) => {
          if(err) return next(err);
          bcrypt.hash(req.body.password, salt,(err, hash) => {
              req.body.password = hash;
              next();
          })
      })
  }
  else {
      next(new Error('crypt err'));
  }
};