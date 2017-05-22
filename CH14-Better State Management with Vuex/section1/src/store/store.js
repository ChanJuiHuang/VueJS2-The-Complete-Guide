import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    actions,
    modules: {
        counter
    }
});
