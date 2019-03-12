import Auth from '../services/auth';
import Email from '../services/email';
import userMessages from '../helpers/messages/users';

const encryptPass = async user => {
	if (user.changed('password')) {
		user.password = await Auth.hash(user.password);
	}
};

const sendWelcomeEmail = async data => {
	return Email.send({
		data,
		template: 'welcome',
		subject: `${data.name.split(' ').shift()}, seja bem-vindo(a)`,
		to: data.email
	});
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
				msg: userMessages.emailAlreadyInUse
			},
			validate: {
				notEmpty: {
					msg: userMessages.emailCantBeEmpty
				},
				isEmail: {
					msg: userMessages.emailIsInvalid
				}
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: {
					msg: userMessages.passwordIsRequired
				}
			}
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		}
	});

	User.prototype.toJSON = function() {
		return [this.get()].map(user => {
			delete user.password;
			return user;
		});
	};

	User.addHook('beforeCreate', user => {
		encryptPass(user);
		sendWelcomeEmail(user);
	});
	User.addHook('beforeUpdate', encryptPass);

	return User;
};
