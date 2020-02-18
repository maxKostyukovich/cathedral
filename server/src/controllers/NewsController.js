import db from '../models'
import NotFoundError from '../errorHandlers/NotFoundError'
import moment from 'moment'
import {STATIC_PATH_MAIN_PHOTO_NEWS} from '../constants'
const News = db.News;

module.exports.createNews = async (req, res, next) => {
    try {
        //console.log(JSON.parse(req.body.news));
        //console.log(req.file);
        const news = JSON.parse(req.body.news);
        news.main_img = req.file.filename;
        news.date = moment(news.date).format('YYYY-MM-DD');
        const result = await News.create(news);
        res.send(result);
    }
    catch (e) {
        return next(e);
    }
};

module.exports.getAllNews = async (req, res, next) => {
    try {
        let limit = Number(req.query.limit);
        let news;
        if(Number.isInteger(limit) && limit > 0) {
            news = await News.findAll({order: [['date', 'DESC']], limit, attributes: { exclude: ['content', 'createdAt', 'updatedAt'] }});
        } else{
            news = await News.findAll({order: [['date', 'DESC']], attributes: { exclude: ['content', 'createdAt', 'updatedAt'] }});
        }
        news.forEach((item) => {
           item.main_img =  STATIC_PATH_MAIN_PHOTO_NEWS + item.main_img;
        });
        res.send(news);
    }
    catch (e) {
        return next(e);
    }
};

module.exports.getNews = async (req, res, next) => {
    const news = await News.findByPk(req.params.id);
    news.main_img = STATIC_PATH_MAIN_PHOTO_NEWS + news.main_img
    if(!news){
        return next(new NotFoundError("News not found"));
    }
    res.send(news);
};

module.exports.deleteNews = async (req, res, next) => {
    try {
        const countOfModifiedFields = await News.destroy({where: {id: req.params.id}});
        if(countOfModifiedFields < 1){
            return next(new NotFoundError("News not found"));
        }
        res.send({modified: countOfModifiedFields});
    } catch(e){
        return next(e);
    }

};