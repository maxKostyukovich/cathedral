import db from '../models'
import NotFoundError from '../errorHandlers/NotFoundError'
import moment from 'moment'
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
        const news = await News.findAll();
        res.send(news);
    }
    catch (e) {
        return next(e);
    }
};

module.exports.getNews = async (req, res, next) => {
    const news = await News.findByPk(req.params.id);
    if(!news){
        return next(new NotFoundError("News not found"));
    }
    res.send(news);
};

module.exports.deleteNews = async (req, res, next) => {
    try {
        const news = await News.findByPk(req.params.id);
        if (!news) {
            return next(new NotFoundError("News not found"));
        }
        const countOfModifiedFields = await News.destroy({where: {id: news.id}});
        res.send({modified: countOfModifiedFields});
    } catch(e){
        return next(e);
    }

};