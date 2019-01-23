module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "É necessário informar um Nome"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: "É necessário informar um e-mail válido"
        }
      }
    },
    password: DataTypes.STRING,
    createdAt: DataTypes.NOW,
    updatedAt: DataTypes.NOW
  });

  return User;
};
