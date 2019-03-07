export default {
	notPossibleList: JSON.stringify({
		code: 'users/not-possible-list',
		message: 'Ocorreu um erro inesperado na listagem de usuários, por favor tente novamente mais tarde'
	}),
	notPossibleAdd: JSON.stringify({
		code: 'users/not-possible-add',
		message: 'Ocorreu um erro inesperado ao adicionar um usuário, por favor tente novamente mais tarde'
	}),
	notPossibleUpdate: JSON.stringify({
		code: 'users/not-possible-update',
		message: 'Ocorreu um erro inesperado ao atualizar este usuário, por favor tente novamente mais tarde'
	}),
	notPossibleDelete: JSON.stringify({
		code: 'users/not-possible-delete',
		message: 'Ocorreu um erro inesperado ao excluir este usuário, por favor tente novamente mais tarde'
	}),
	emailAlreadyInUse: JSON.stringify({
		code: 'users/email-already-in-use',
		message: 'Este e-mail já está em uso'
	}),
	emailCantBeEmpty: JSON.stringify({
		code: 'users/email-can-not-be-empty',
		message: 'E-mail não pode ser vazio'
	}),
	emailIsInvalid: JSON.stringify({
		code: 'users/invalid-email',
		message: 'É necessário informar um e-mail válido'
	}),
	passwordIsRequired: JSON.stringify({
		code: 'users/password-is-required',
		message: 'Senha é obrigatória'
	})
};
