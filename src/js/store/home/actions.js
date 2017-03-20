/**
* @Author: songqi
* @Date:   2017-01-17
* @Last modified by:   songqi
* @Last modified time: 2017-03-16
*/

export const GET_EXPERTSSAY_ARTICLE = ({commit}, vm) => {
    vm.$BM_axios.fetch({
        url: 'home_expertsSayArticle',
        data: {
            category: 'Expert'
        }
    }).then((resData) => {
        commit('EXPERTSSAY_INIT', resData.data.articles);
    });
}

export const UPDATE_EXPERTSSAY_READ = ({commit}, { vm, id }) => {
    vm.$BM_axios.fetch({
        url: 'home_expertsSayRead',
        data: {
            id
        }
    }).then((resData) => {
        vm.$BM_router.toWebView({
            title: resData.data.title,
            url: resData.data.articleUrl
        });
    });
}

export const GET_COMMONDISEASES_LIST = ({commit}, vm) => {
    vm.$BM_axios.fetch({
        url: 'home_commonDiseases'
    }).then((resData) => {
        commit('COMMONDISEASES_INIT', resData.data.disease);
    });
}

export const GET_CARD_LIST = ({commit}, { vm }) => {
    vm.$BM_modal.showLoading();
    vm.$BM_axios.fetch({
        url: 'account_myCards_list',
        authorize: true
    }).then(res => {
        vm.$BM_modal.hideLoading();
        let list = res.data.cardDetails
        if (list.length) {
            vm.$BM_router.open({
                page: 'reportQuery_conditionalQuery',
                authorize: true,
                title: '报告查询'
            });
        } else {
            vm.$BM_router.open({
                page: 'account_selectBindCard',
                authorize: true,
                title: '绑定新卡'
            });
        }
    }, res => {
        vm.$BM_modal.hideLoading();
        vm.$BM_modal.alert({
            message: res.msg
        })
    })
}
