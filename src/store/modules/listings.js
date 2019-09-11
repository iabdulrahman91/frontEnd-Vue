import axios from 'axios';

const state = {
    listings: [],
    loading: true,
    listing: null,
};

const getters = {
    allListings: state => state.listings,
    Listing: state => state.listing,
    Loading: state => state.loading,
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
    async addListing({ commit }, title) {
        const response = await axios.post(
            '/listings',
            { title, completed: false }
        );

        commit('newListing', response.data);
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

    newListing: (state, listing) => state.listings.unshift(listing),

    removeListing: (state, id) =>
        (state.listings = state.listings.filter(listing => listing.id !== id)),

    updateListing: (state, updlisting) => {
        const index = state.listings.findIndex(listing => listing.id === updlisting.id);
        if (index !== -1) {
            state.listings.splice(index, 1, updlisting);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
