import db from '../models'
import NotFoundError from '../errorHandlers/NotFoundError'
import moment from 'moment'
import {STATIC_PATH_AVATAR_PRIEST} from '../constants'
import fs from "fs";
const Priest = db.Priest;

module.exports.create = async (req, res, next) => {
    try {
        const priest = req.body;
        priest.avatar = req.file.filename;
        const result = await Priest.create(priest);
        res.send(result);
    }
    catch (e) {
        return next(e);
    }
};

module.exports.getAll = async (req, res, next) => {
    try {
        const priests = await Priest.findAll({attributes: { exclude: ['biography', 'createdAt', 'updatedAt'] }});
        priests.forEach((item) => {
            item.avatar =  STATIC_PATH_AVATAR_PRIEST + item.avatar;
        });
        res.send(priests);
    }
    catch (e) {
        return next(e);
    }
};

module.exports.get = async (req, res, next) => {
    const priest = await Priest.findByPk(req.params.id);
    priest.avatar = STATIC_PATH_AVATAR_PRIEST + priest.avatar;
    if(!priest){
        return next(new NotFoundError("Priest not found"));
    }
    res.send(priest);
};

module.exports.update = async (req, res, next) => {
    try {
        let news = req.body;
        const oldPriest = await Priest.findByPk(req.params.id);
        if (!oldPriest) {
            return next(new NotFoundError('Priest was not found'));
        }
        if (req.file) {
            fs.unlink("public/images/priestsAvatars/" + oldPriest.avatar, (err) => {
                if (err) return next(err)
            });
            news.avatar = req.file.filename;
        }
        if(news.date) {
            news.date = moment(news.date).format('YYYY-MM-DD');
        }
        await Priest.update(news, {where: {id: req.params.id}});
        res.status(201).send();
    } catch (e) {
        next(e);
    }
};

module.exports.delete = async (req, res, next) => {
    try {
        const priest = await Priest.findByPk(req.params.id);
        if(!priest){
            return next(new NotFoundError('Priest not found'))
        }
        fs.unlink("public/images/priestsAvatars/" + priest.avatar, (err) => {
            if (err) throw err
        });
        const countOfModifiedFields = await Priest.destroy({where: {id: req.params.id}});
        res.send({modified: countOfModifiedFields});
    } catch(e){
        return next(e);
    }
};
