module.exports = (sequelize, DataTypes) => {
    return sequelize.define('News', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        short_description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            validation: {
                notEmpty: true,
            },
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validation: {
                notEmpty: true,
            },
        },
        main_img: {
            type: DataTypes.STRING
        },
    });
};