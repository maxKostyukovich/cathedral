export const nl2br = (str ) => {
    return str.replace(/([^>])\n/g, '$1<br/>');
};
