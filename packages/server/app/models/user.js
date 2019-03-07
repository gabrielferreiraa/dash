import { Auth } from '../services';

const encryptPass = async user => {
	if (user.changed('password')) {
		user.password = await Auth.hash(user.password);
	}
};

export default (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
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
	});

	User.prototype.toJSON = function() {
		return [this.get()].map(user => {
			delete user.password;
			return user;
		});
	};

	User.addHook('beforeCreate', encryptPass);
	User.addHook('beforeUpdate', encryptPass);

	return User;
};
