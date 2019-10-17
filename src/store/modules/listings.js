import axios from 'axios';

const state = {
    listings: [],
    loading: true,
    listing: null,
    error: null,
};

const getters = {
    allListings: state => state.listings,
    Listing: state => state.listing,
    Loading: state => state.loading,
    ListingError: state => state.error,
};

const actions = {
    // @index
    async fetchListings({ commit }, page) {
        commit('setLoading', true);

        const response = (page==null)? await axios.get(
            '/listings'
        ) : await axios.get(
            `/listings?page=${page}`
        );

        commit('setListings', response.data);
        commit('setLoading', false);
    },

    // @show
    async fetchListing({ commit }, id){
      commit('setLoading', true);
      const response = await axios.get(
          `/listings/${id}`
      );
      commit('setListing', response.data);
      commit('setLoading', false);
    },

    // @store
    async postListing({ commit }, formData) {
        commit('setLoading', true);
        let config = {
            headers: {
                'Authorization': 'Bearer ' + this.getters.Token,
            },
        };
        await axios.post(
            '/listings',
            formData,config)
            .then(res => {
                commit('setListing', res.data)
                commit('setListingError', null)
            })
            .catch(reason => {
                commit('setListingError', reason.response.data)
            })
        commit('setLoading', false);
    },

    // @destroy
    async deleteListing({ commit }, id) {
        await axios.delete(`/listings/${id}`);

        commit('removeListing', id);
    },

    // Extraaa
    async filterListings({ commit }, e) {
        // Get selected number
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );

        const response = await axios.get(
            `/listings?_limit=${limit}`
        );

        commit('setListings', response.data);
    },

    // @Put
    async updateListing({ commit }, updlisting) {
        const response = await axios.put(
            `/listings/${updlisting.id}`,
            updlisting
        );

        // console.log(response.data);

        commit('updateListing', response.data);
    }
};

const mutations = {
    setLoading: (state, status) => (state.loading = status),

    setListings: (state, listings) => (state.listings = listings),

    setListing: (state, listing) => (state.listing = listing),

    setListingError: (state, error) => (state.listingError = error),

};

export default {
    state,
    getters,
    actions,
    mutations
};
