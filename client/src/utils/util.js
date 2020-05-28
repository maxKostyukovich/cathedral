export const nl2br = (str ) => {
    return str.replace(/([^>])\n/g, '$1<br/>');
};

export const getImageName = (image) => {
    const splitImage = image.split('/');
    return splitImage[splitImage.length -1]
};

export const cutText = (text, length) => {
    if (text.length > length) {
        return text.slice(0, length - 4) + ' ...'
    }
    return text;
};
