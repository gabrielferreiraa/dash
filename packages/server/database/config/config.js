import config from '../../config/database';

const env = process.env.NODE_ENV || 'development';

export default {
	[env]: config
};
