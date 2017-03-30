module.exports = function (sequelize, DataTypes) {
	var Question = sequelize.define('Question', {
		question: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {
		classMethods: {
			associate: function (models) {
				// associations can be defined here
				Question.hasMany(models.Answer, {
					foreignKey: 'questionId',
					as: 'answers'
				});

				Question.hasMany(models.IpAddress, {
					foreignKey: 'questionId',
					as: 'ipAddresses'
				});
			}
		}
	});
	return Question;
};
