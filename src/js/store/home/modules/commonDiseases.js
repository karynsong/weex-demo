/**
* @Author: songqi
* @Date:   2017-01-16
* @Last modified by:   songqi
* @Last modified time: 2017-03-15
*/

const state = {
    list: []
}

const getters = {
    COMMONDISEASES_list: state => state.list
}

const mutations = {
    COMMONDISEASES_INIT(state, data){
        state.list = data;
    }
}

export default {
    state,
    getters,
    mutations
}
