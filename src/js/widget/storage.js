/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-02-10
*/

var storage = weex.requireModule('bmStorage'),
    modal = weex.requireModule('bmModal');

import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';

var Storage = {};

Storage.install = (Vue, options) => {
    Vue.prototype.$BM_storage = {
        set(key, value, callback){
            if(key === 'userInfo'){
                value = JSON.stringify(value);
            }else{
                value = JSON.stringify({
                    data: value
                });
            }
            return new Promise((resolve, reject) => {
                storage.setData(key, value, (resData) => {
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
        },

        get(key, callback){
            return new Promise((resolve, reject) => {
                storage.getData(key, (resData) => {
                    resData.data = JSON.parse(resData.data.value || '{}')
                    if(key !== 'userInfo'){
                        resData.data = resData.data.data;
                    }
                    if(isFunction(callback)){
                        callback.call(this, resData);
                    }
                    if(resData && resData.resCode == 0){
                        resolve(resData.data);
                    }else if(resData && resData.resCode == 9){
                        // 如果发现值不存在则返回空字符串
                        resolve('');
                    }else{
                        reject(resData);
                    }
                });
            });
        },

        delete(key, callback){
            return new Promise((resolve, reject) => {
                storage.deleteData(key, (resData) => {
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
        },

        remove(callback){
            return new Promise((resolve, reject) => {
                storage.removeData((resData) => {
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

Vue.use(Storage)
