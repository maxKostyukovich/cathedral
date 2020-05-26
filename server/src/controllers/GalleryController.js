import db from '../models'
import NotFoundError from '../errorHandlers/NotFoundError'
import {STATIC_PATH_IMAGE_GALLERY} from '../constants'
import fs from "fs";
const Gallery = db.Gallery;

module.exports.create = async (req, res, next) => {
    try {
        const gallery = req.body;
        gallery.image = req.file.filename;
        const result = await Gallery.create(gallery);
        res.send(result);
    }
    catch (e) {
        return next(e);
    }
};

module.exports.getAll = async (req, res, next) => {
    try {
        const galleries = await Gallery.findAll({});
        galleries.forEach((item) => {
            item.image =  STATIC_PATH_IMAGE_GALLERY + item.image;
        });
        res.send(galleries);
    }
    catch (e) {
        return next(e);
    }
};

module.exports.get = async (req, res, next) => {
    const gallery = await Gallery.findByPk(req.params.id);
    gallery.image = STATIC_PATH_IMAGE_GALLERY + gallery.image;
    if(!gallery){
        return next(new NotFoundError("Image not found"));
    }
    res.send(gallery);
};

module.exports.update = async (req, res, next) => {
    try {
        let gallery = req.body;
        const oldGallery = await Gallery.findByPk(req.params.id);
        if (!oldGallery) {
            return next(new NotFoundError('Image was not found'));
        }
        if (req.file) {
            fs.unlink("public/images/gallery/" + oldGallery.image, (err) => {
                if (err) return next(err)
            });
            gallery.image = req.file.filename;
        }
        await Gallery.update(gallery, {where: {id: req.params.id}});
        res.status(201).send();
    } catch (e) {
        next(e);
    }
};

module.exports.delete = async (req, res, next) => {
    try {
        const gallery = await Gallery.findByPk(req.params.id);
        if(!gallery){
            return next(new NotFoundError('Image not found'))
        }
        fs.unlink("public/images/gallery/" + gallery.image, (err) => {
            if (err) throw err
        });
        const countOfModifiedFields = await Gallery.destroy({where: {id: req.params.id}});
        res.send({modified: countOfModifiedFields});
    } catch(e){
        return next(e);
    }
};
