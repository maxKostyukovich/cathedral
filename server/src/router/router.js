import express from 'express'
import multer from 'multer'

import hashPassMiddleware from '../middleware/hashPassMiddleware';
import newsController from '../controllers/NewsController';
import userController from '../controllers/UserController'
import validation from '../middleware/validationMiddleware'
import loginUserValidationScheme from '../utils/validationOnLogin'
import createNewsValidationScheme from '../utils/validationOnCreateNews'
import createDiskStorageConfig from '../middleware/multer/createDiskStorageConfig'
import { accessTokenVerify, refreshTokenVerify } from '../middleware/authMiddleware'
const upload = multer({storage : createDiskStorageConfig(multer, __dirname, '../../public/images/mainPhotoNews')});
const router = express.Router();

router.get('/', (req, res, next) => {
   res.send({ok: "ok"});
});

router.post('/user', hashPassMiddleware, userController.createUser);
router.post('/login', validation(loginUserValidationScheme), userController.loginUser);

router.get('/news/:id', newsController.getNews);
router.get('/news', newsController.getAllNews);
router.post('/news'/*validation(createNewsValidationScheme)*/,upload.single('main_img'), newsController.createNews);
router.delete('/news/:id', newsController.deleteNews);

router.post('/refresh', userController.refreshToken);

module.exports = router;