/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-03-15
*/

var modal = weex.requireModule('bmModal');

import isFunction from 'lodash/isFunction';

var Modal = {};

Modal.install = (Vue, options) => {
    Vue.prototype.$BM_modal = {
        alert(options){
            if(options.message){
                return new Promise((resolve, reject) => {
                    modal.alert({
                        titleAlign: options.titleAlign || 'center',
                        title: options.title || '',
                        message: options.message || '',
                        messageAlign: options.messageAlign || 'center',
                        okTitle: options.okTitle || '确定'
                    }, (params) => {
                        if(isFunction(options.callback)){
                            options.callback.call(params)
                        }
                        resolve();
                    })
                });
            }
        },
        confirm(options){
            if(options.message){
                return new Promise((resolve, reject) => {
                    modal.confirm({
                        titleAlign: options.titleAlign || 'center',
                        title: options.title || '',
                        message: options.message || '',
                        messageAlign: options.messageAlign || 'center',
                        cancelTitle: options.cancelTitle || '取消',
                        okTitle: options.okTitle || '确定'
                    }, (params) => {
                        if(isFunction(options.cancelCallback)){
                            options.cancelCallback.call(params)
                        }
                        reject();
                    }, (params) => {
                        if(isFunction(options.okCallback)){
                            options.okCallback.call(params)
                        }
                        resolve();
                    })
                });
            }
        },
        showLoading(options){
            modal.showLoading({
                message: options && options.message || ''
            })
        },
        hideLoading(options){
            modal.hideLoading()
        },
        toast(options){
            if(options.message){
                modal.toast({
                    message: options.message,
                    duration: options.duration || 3000
                });
            }
        }
    }
}

Vue.use(Modal)
