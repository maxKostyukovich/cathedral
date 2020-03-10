const Yup = require('yup');
module.exports.create = Yup.object().shape({
    full_name: Yup.string()
        .required('Full name is required'),
    current_position: Yup.string()
        .required('Current position is required'),
    biography: Yup.string()
        .required("Biography is required"),
    avatar: Yup.string()
        .matches(/\w+\.(jpg|png)/g, "Format must be jpg, png")
});