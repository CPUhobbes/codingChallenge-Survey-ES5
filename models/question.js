module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    question: {
		type:DataTypes.STRING,
		allowNull: false,
	}
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Question.hasMany(models.Answer, {
          foreignKey:'questionId',
          as: 'answers',
        })

        Question.hasMany(models.IpAddress, {
          foreignKey:'questionId',
          as: 'ipAddresses',
      })
    }
  }

  });
  return Question;
};