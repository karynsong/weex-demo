/**
* @Author: songqi
* @Date:   2017-01-17
* @Last modified by:   songqi
* @Last modified time: 2017-03-28
*/

export const GET_EXPERTSSAY_ARTICLE = ({commit}, vm) => {
    vm.$BM_axios.fetch({
        url: 'home_xxxx',
        data: {
            category: 'Expert'
        }
    }).then((resData) => {
        commit('EXPERTSSAY_INIT', resData.data.articles);
    });
}
