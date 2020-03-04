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

router.post('/user', hashPassMiddleware, userController.createUser);
router.post('/login', validation(loginUserValidationScheme), userController.loginUser);

router.get('/news/:id', newsController.getNews);
router.get('/news', newsController.getAllNews);
router.post('/news', accessTokenVerify, upload.single('main_img'), validation(createNewsValidationScheme), newsController.createNews);
router.put('/news/:id', accessTokenVerify, upload.single('main_img'), newsController.update);
router.delete('/news/:id', accessTokenVerify, newsController.deleteNews);

router.post('/refresh', refreshTokenVerify, userController.refreshToken);

module.exports = router;