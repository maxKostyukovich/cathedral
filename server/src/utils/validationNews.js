const Yup = require('yup');
module.exports.create = Yup.object().shape({
    title: Yup.string()
        .required('Title is required'),
    content: Yup.string()
        .required('Content is required'),
    short_description: Yup.string()
        .required("Short Description is required"),
    date: Yup.string()
        .required("Date is required")
        .matches(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, "Invalid date format"),
    main_img: Yup.string()
        .matches(/\w+\.(jpg|png)/g, "Format must be jpg, png")
});

module.exports.update = Yup.object().strict(true).shape({
    title: Yup.string(),
    content: Yup.string(),
    short_description: Yup.string(),
    date: Yup.string()
        .matches(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/, "Invalid date format"),
    main_img: Yup.string(),
});