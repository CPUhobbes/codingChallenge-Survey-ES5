module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('IpAddresses', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: true,
				primaryKey: true
			},
			ip: {
				type: Sequelize.STRING
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			questionId: {
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'Questions',
					key: 'id',
					as: 'questionId'
				}
			}
		});
	},
	down: function (queryInterface) {
		return queryInterface.dropTable('IpAddresses');
	}
};
