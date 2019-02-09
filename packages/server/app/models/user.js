import bcrypt from 'bcrypt';

const encryptPass = user => {
	if (user.changed('password')) {
		user.password = bcrypt.hashSync(user.password, 10);
	}
};

export default (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
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
						msg: 'Nome é obrigatório'
					}
				}
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				defaultValue: '',
				unique: {
					args: true,
					msg: 'Este e-mail já está em uso'
				},
				validate: {
					notEmpty: {
						msg: 'E-mail não pode ser vazio'
					},
					isEmail: {
						msg: 'É necessário informar um e-mail válido'
					}
				}
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: 'Senha é obrigatória'
					}
				}
			},
			createdAt: DataTypes.NOW,
			updatedAt: DataTypes.NOW
		},
		{
			defaultScope: {
				attributes: { exclude: ['password'] }
			}
		}
	);

	User.hook('beforeCreate', encryptPass);
	User.hook('beforeUpdate', encryptPass);

	return User;
};
