/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-02-09
*/

var modal = weex.requireModule('bmModal'),
    geolocation = weex.requireModule('bmGeolocation');

import isFunction from 'lodash/isFunction';

var Geolocation = {};

Geolocation.install = (Vue, options) => {
    Vue.prototype.$BM_geolocation = {
        get(callback){
            return new Promise((resolve, reject) => {
                geolocation.getGeolocation((resData) => {
                    if(!resData){
                        resData = {
                            resCode: -1,
                            msg: '获取信息失败，请重试',
                            data: {}
                        }
                    }
                    if(isFunction(callback)){
                        callback.call(this, resData);
                    }
                    if(resData && resData.resCode == 0){
                        resolve(resData);
                    }else{
                        resData.msg && modal.alert({
                            message: resData.msg,
                            okTitle: '确定'
                        });
                        reject(resData);
                    }
                });
            });
        }
    }
}

Vue.use(Geolocation)
