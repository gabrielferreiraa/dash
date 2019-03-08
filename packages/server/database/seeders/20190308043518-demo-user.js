'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Users',
			[
				{
					name: 'Gabriel Ferreira',
					email: 'hi.gabrielferreira@gmail.com',
					password: '$2b$10$riQcYYLTRJHmtnb/hhQmc.mXRT4XE77.muoo/9Ve0L3YvNliCFsLm'
				}
			],
			{}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Users', null, {});
	}
};
