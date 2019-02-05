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
          msg: "Nome é obrigatório"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "E-mail é obrigatório"
        },
        isEmail: {
          msg: "É necessário informar um e-mail válido"
        },
        async isUnique(email) {
          const user = await User.find({ where: { email } });

          if (user) {
            throw new Error(`O E-mail ${email} já está em uso`);
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Senha é obrigatória"
        }
      }
    },
    createdAt: DataTypes.NOW,
    updatedAt: DataTypes.NOW
  });

  return User;
};
