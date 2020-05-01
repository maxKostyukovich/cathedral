export const PORT = 5000;
export const SALT = 10;
export const JWT = {
    secret: 'J4xeYrcnsdfbtk3452hcu74Jsl',
    access: {
        type: 'access',
        expiresIn: '60m',
    },
    refresh: {
        type: 'refresh',
        expiresIn: '30d',
    },
};

export const MULTER_TIME_FORMAT = 'x';

export const STATIC_PATH_MAIN_PHOTO_NEWS = '/static/mainPhotoNews/';
export const STATIC_PATH_AVATAR_PRIEST = '/static/priestsAvatars/';

export const ROUTES = {
    NEWS: '/news',
    NEWS_ID: 'news/:id',
    PRIEST: '/priest',
    PRIEST_ID: '/priest/:id',
    LOGIN: '/login',
    USER: '/user',
    REFRESH: '/refresh',

};
