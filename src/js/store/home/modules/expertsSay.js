/**
* @Author: songqi
* @Date:   2017-01-16
* @Last modified by:   songqi
* @Last modified time: 2017-03-16
*/

const state = {
    list: []
}

const getters = {
    EXPERTSSAY_list: state => state.list
}

const mutations = {
    EXPERTSSAY_INIT(state, data){
        data.map(item => {
            if(item.bannerResourceId){
                state.list.push(item);
            }
        });
    }
}

export default {
    state,
    getters,
    mutations
}
