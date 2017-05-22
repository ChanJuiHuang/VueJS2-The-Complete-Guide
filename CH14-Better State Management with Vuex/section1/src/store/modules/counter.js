const state = {
    counter: 0
};

const getters = {
    doubleCounter: state => state.counter*2,
    stringCounter: state => state.counter + ' Clicks',
};

const mutations = {
    increment: (state, payload) => state.counter += payload,
    decrement: (state, payload) => state.counter -= payload,
};

const actions = {
    increment: (context, payload) => context.commit('increment', payload),
    decrement: (context, payload) => context.commit('decrement', payload),
    asyncIncrement: ({ commit }, { by, delay }) => {
        setTimeout(() => {
            commit('increment', by);
        }, delay);
    },
    asyncDecrement: ({ commit }, { by, delay }) => {
        setTimeout(() => {
            commit('decrement', by);
        }, 1000);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
};