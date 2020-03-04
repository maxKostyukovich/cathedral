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
        birth_date: {
            type: DataTypes.DATEONLY
        },
        current_position: {
            type: DataTypes.STRING
        },
    });
};