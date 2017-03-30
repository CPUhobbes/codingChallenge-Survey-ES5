module.exports = function (sequelize, DataTypes) {
	var Answer = sequelize.define('Answer', {
		answer: {
			type: DataTypes.STRING,
			allowNull: false
		},
		responses: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	}, {
		classMethods: {
			// associations can be defined here
			associate: function (models) {
				Answer.belongsTo(models.Question, {
					foreignKey: 'questionId',
					onDelete: 'CASCADE'
				});
			}
		}
	});
	return Answer;
};
