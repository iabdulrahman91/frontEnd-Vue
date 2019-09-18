import axios from 'axios';

const state = {
    cities: [],
    loadingLocation: true,
};

const getters = {
    Cities: state => state.cities,
    LoadingLocation: state => state.loadingLocation,
};

const actions = {
    // @index
    async fetchCities({ commit }) {
        commit('setLoading', true);
        await axios.get('/cities')
            .then(response => {
                commit('setCities', response.data);
            })
            .catch(() => {
                commit('setCities', null);
            });

        commit('setLoading', false);
    },


};

const mutations = {
    setLoading: (state, status) => (state.loadingLocation = status),

    setCities: (state, cities) => (state.cities = cities),

};

export default {
    state,
    getters,
    actions,
    mutations
};
