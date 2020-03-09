module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Priest', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        current_position: {
            type: DataTypes.STRING
        },
        biography: {
            type: DataTypes.TEXT
        },
        avatar: {
            type: DataTypes.STRING
        },
    });
};