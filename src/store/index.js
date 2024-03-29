import Vuex from 'vuex';
import Vue from 'vue';
import listings from './modules/listings';
import auth from './modules/auth';
import location from "@/store/modules/location";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        listings,
        auth,
        location,
    }
});
