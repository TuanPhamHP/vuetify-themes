import { createStore } from 'vuex';
export default new createStore({
	state: {
		currentLayout: 'isAuth', // isAuth | noAuth
		auth: {
			isAuth: false,
			user: null,
			token: null,
		},
	},
	mutations: {
		SET_USER_LOGGEDIN(state, payload) {
			state.auth = { ...payload };
		},
		SET_CURRENT_LAYOUT(state, payload) {
			state.currentLayout = payload;
		},
	},
	getters: {
		userFromAuth: state => {
			if (!state.auth.user) {
				return {};
			}
			return state.auth.user;
		},
	},
	modules: {},
});
