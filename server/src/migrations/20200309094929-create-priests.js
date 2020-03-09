module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Priests', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            full_name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            current_position: {
                type: Sequelize.STRING
            },
            biography: {
                type: Sequelize.TEXT
            },
            avatar: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.NOW,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Priests');
    },
};