'use strict';
require('dotenv').config();
import { User } from '../../app/models';
import Repository from '../../app/repositories';

export default {
	up: () =>
		Repository.add({
			name: process.env.SEEDER_USER_NAME,
			email: process.env.SEEDER_USER_EMAIL,
			password: process.env.SEEDER_USER_PASS
		})(User),
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
