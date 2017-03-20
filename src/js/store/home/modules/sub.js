const state = {
    list: []
}

const getters = {
    CARD_list: state => state.list
}

const mutations = {
    SET_CARD_LIST(state, data){
        state.list = data;
    }
}

export default {
    state,
    getters,
    mutations
}
