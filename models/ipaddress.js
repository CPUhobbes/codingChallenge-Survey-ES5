module.exports = function (sequelize, DataTypes) {
	var IpAddress = sequelize.define('IpAddress', {
		ip: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				IpAddress.belongsTo(models.Question, {
					foreignKey: 'questionId',
					onDelete: 'CASCADE'
				});
			}
		}
	});
	return IpAddress;
};
