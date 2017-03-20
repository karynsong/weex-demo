/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-03-14
*/

import isFunction from 'lodash/isFunction';

var appConfig = weex.requireModule('bmAppConfig');

var AppConfig = {};

AppConfig.install = (Vue, options) => {
    Vue.prototype.$BM_appConfig = {
        changeFontSize(fontSize){
            appConfig.changeFontSize({
                fontSize: fontSize || 'NORM'
            })
        },

        getFontSize(callback){
            return new Promise((resolve, reject) => {
                appConfig.getFontSize((resData) => {
                    if(isFunction(callback)){
                        callback.call(this, resData);
                    }
                    if(resData && resData.resCode == 0){
                        resolve(resData);
                    }else{
                        reject(resData);
                    }
                });
            });
        }
    }
}

Vue.use(AppConfig)
