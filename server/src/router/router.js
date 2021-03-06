import express from 'express'
import multer from 'multer'

import { ROUTES } from "../constants";
import hashPassMiddleware from '../middleware/hashPassMiddleware';
import newsController from '../controllers/NewsController';
import userController from '../controllers/UserController'
import priestController from '../controllers/PriestController'
import galleryController from '../controllers/GalleryController'
import validation from '../middleware/validationMiddleware'
import loginUserValidationScheme from '../utils/validationOnLogin'
import createNewsValidationScheme from '../utils/validationNews'
import createDiskStorageConfig from '../middleware/multer/createDiskStorageConfig'
import { accessTokenVerify, refreshTokenVerify } from '../middleware/authMiddleware'
const uploadMainNewsImage = multer({storage : createDiskStorageConfig(multer, __dirname, '../../public/images/mainPhotoNews')});
const uploadPriestAvatar = multer({storage : createDiskStorageConfig(multer, __dirname, '../../public/images/priestsAvatars')});
const uploadGalleryImage = multer({storage : createDiskStorageConfig(multer, __dirname, '../../public/images/gallery')});
const router = express.Router();

router.post(ROUTES.USER, hashPassMiddleware, userController.createUser);
router.post(ROUTES.LOGIN, validation(loginUserValidationScheme), userController.loginUser);
router.get(ROUTES.USER, accessTokenVerify, userController.getUser);

router.get(ROUTES.NEWS_ID, newsController.get);
router.get(ROUTES.NEWS, newsController.getAll);
router.post(ROUTES.NEWS, accessTokenVerify, uploadMainNewsImage.single('main_img'),
    validation(createNewsValidationScheme.create), newsController.create);
router.put(ROUTES.NEWS_ID, accessTokenVerify, uploadMainNewsImage.single('main_img'),
    validation(createNewsValidationScheme.update), newsController.update);
router.delete(ROUTES.NEWS_ID, accessTokenVerify, newsController.delete);

router.get(ROUTES.PRIEST, priestController.getAll);
router.get(ROUTES.PRIEST_ID, priestController.get);
router.post(ROUTES.PRIEST, accessTokenVerify, uploadPriestAvatar.single('avatar'), priestController.create);
router.put(ROUTES.PRIEST_ID, accessTokenVerify, uploadPriestAvatar.single('avatar'), priestController.update);
router.delete(ROUTES.PRIEST_ID, accessTokenVerify, priestController.delete);

router.get(ROUTES.GALLERY, galleryController.getAll);
router.get(ROUTES.GALLERY_ID, galleryController.get);
router.post(ROUTES.GALLERY, accessTokenVerify, uploadGalleryImage.single('image'), galleryController.create);
router.put(ROUTES.GALLERY_ID, accessTokenVerify, uploadGalleryImage.single('image'), galleryController.update);
router.delete(ROUTES.GALLERY_ID, accessTokenVerify, galleryController.delete);

router.post('/refresh', refreshTokenVerify, userController.refreshToken);

module.exports = router;
