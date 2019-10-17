import axios from 'axios';

const state = {
    user: null,
    token: localStorage.getItem('token' || null),
    loading: false,
    error: null,


};

const getters = {
    User: state => state.user,
    Token: state => state.token,
    LoadingUser: state => state.loading,
    AuthErrors: state => state.error,
};

const actions = {

    // @login
    async login({commit}, formData) {
        commit('setLoadingUser', true);
        await axios.post(
            '/login',
            formData
        )
            .then(response => {
                commit('setUser', response.data.user);
                commit('setToken', response.data.token);

            })
            .catch(reason => {
                commit('setError', reason.response.data.message)
            })
        commit('setLoadingUser', false);

    },

    // @register
    async register({commit}, formData) {
        commit('setLoadingUser', true);
        await axios.post(
            '/register',
            formData
        )
            .then(response => {
                commit('setUser', response.data.user);
                commit('setToken', response.data.token);

            })
            .catch(reason => {
                commit('setError', reason.response.data.error)
            })
        commit('setLoadingUser', false);


    },

    // @details
    async details({commit}) {
        commit('setLoadingUser', true);
        if (this.getters.Token === null) {
            commit('clearAuth')
        } else {
            let config = {
                headers: {
                    'Authorization': 'Bearer ' + this.getters.Token,
                },
            };
            await axios.get(
                '/details', config
            )
                .then(response => {
                    commit('setUser', response.data.user);

                })
                .catch(reason => {
                    commit('setError', reason)
                    commit('clearAuth')
                })
        }

        commit('setLoadingUser', false);
    },

    async logout({commit}) {
        commit('setLoadingUser', true)
        commit('clearAuth')
        commit('setLoadingUser', false)
    }


};

const mutations = {

    setLoadingUser: (state, status) => (state.loading = status),

    setUser: (state, user) => (state.user = user),

    setToken: (state, token) => (state.token = token, localStorage.setItem('token', token)),

    setError: (state, error) => (state.error = error),

    clearAuth: (state) => (localStorage.removeItem('user'), localStorage.removeItem('token'), state.token = null, state.user = null)


};

export default {
    state,
    getters,
    actions,
    mutations
};
