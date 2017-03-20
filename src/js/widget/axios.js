/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-03-10
*/

var axios = weex.requireModule('bmAxios'),
    modal = weex.requireModule('bmModal');

import login from 'Utils/login';
import isFunction from 'lodash/isFunction';
import { getUrl,  HTTP_ERROR_FUNCTION } from 'Config/apiUrlMap';

var Axios = {};

const AJAX_MAP = {};

const dealData = (options, resData, resolve, reject) => {
    if(resData && resData.resCode == 0){
        if(isFunction(options.success)){
            options.success(resData);
        }
        resolve(resData);
    }else{
        modal.hideLoading();
        if(resData && (resData.resCode == 2 || resData.resCode == 3 || resData.resCode == 4)) {
            // 删除登录信息
            login(resData.msg);
            return;
        }
        if(!options.noShowDefaultError && isFunction(HTTP_ERROR_FUNCTION)){
            HTTP_ERROR_FUNCTION(modal, resData);
        }
        if(isFunction(options.error)){
            options.error(resData);
        }
        reject(resData);
    }
}

function abort(key){
    if(AJAX_MAP[key] && AJAX_MAP[key]['status'] === 'sending'){
        AJAX_MAP[key]['status'] = 'abort';
    }
}

Axios.install = (Vue, options) => {
    Vue.prototype.$BM_axios = {
        cancelToken(){
            var token = +new Date();
            return {
                token,
                abort(){
                    abort(this.token);
                }
            }
        },
        fetch(options){
            // 不仅支持 success, error 的回调写法，还支持 promise 的写法
            // let d1 = new Date
            return new Promise((resolve, reject) => {
                var sendUrl = getUrl(options.url) || options.url;
                if(options.token){
                    AJAX_MAP[options.token.token] = {
                        status: 'sending'
                    }
                }
                axios.fetch({
                    method: options.method || 'GET',
                    url: getUrl(options.url) || options.url,
                    header: options.header || {},
                    noRepeat: options.noRepeat || false,
                    authorize: options.authorize || false,
                    data: options.data || {}
                }, (resData) => {
                    // let d2 = new Date - d1
                    // resData._feAjaxTime = d2
                    // 等待做统一的监控
                    if(!options.token || options.token && AJAX_MAP[options.token.token]['status'] === 'sending'){
                        dealData(options, resData, resolve, reject);
                    }
                    options.token && (delete AJAX_MAP[options.token.token]);
                });
            });
        }
    }
}

Vue.use(Axios)
