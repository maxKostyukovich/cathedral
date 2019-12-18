const Yup = require('yup');
module.exports = Yup.object().shape({
    email: Yup.string()
        .email('E-mail is not valid')
        .required('E-mail is required'),
    password: Yup.string()
        .required('Password is required!'),
});