export default {
	userNotFound: {
		code: 'auth/user-not-found',
		message: 'Não foi encontrado usuário com esse e-mail e senha'
	},
	tokenNotFound: {
		code: 'auth/token-not-found',
		message: 'Token não encontrado'
	},
	sessionExpired: {
		code: 'auth/session-expired',
		message: 'Sessão expirada ou token inválido'
	},
	default: {
		code: 'auth/default-error',
		message: 'Houve um erro inesperado ao realizar login'
	}
};
