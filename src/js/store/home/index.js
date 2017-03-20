/**
* @Author: songqi
* @Date:   2017-01-16
* @Last modified by:   songqi
* @Last modified time: 2017-03-15
*/

import Vuex from 'vuex';

// 模块
import sub from './modules/sub';
import expertsSay from './modules/expertsSay';
import commonDiseases from './modules/commonDiseases';

import * as actions from './actions'

if (WXEnvironment.platform !== 'Web') {
    Vue.use(Vuex)
}
export default new Vuex.Store({
    actions,
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        sub,
        expertsSay,
        commonDiseases
    }
})
