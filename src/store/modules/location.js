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
            .then(resp => {
                commit('setCities', Object.keys(resp.data.data).map((key) => {
                    return resp.data.data[key].name
                }));
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
