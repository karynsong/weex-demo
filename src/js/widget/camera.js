/**
* @Author: songqi
* @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-03-08
*/

var camera = weex.requireModule('bmCamera'),
    modal = weex.requireModule('bmModal');

import isFunction from 'lodash/isFunction';

var Camera = {};

Camera.install = (Vue, options) => {
    Vue.prototype.$BM_camera = {
        scan(callback){

            return new Promise((resolve, reject) => {
                camera.scan((resData) => {
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
                        })
                        reject(resData);
                    }
                });
            });
        },
        uploadImage(options, callback){
            var options = options || {}
            if(isFunction(options) && !callback){
                callback = options;
                options = {};
            }
            return new Promise((resolve, reject) => {
                camera.uploadImage({
                    maxCount: options.maxCount || 1,
                    imageWidth: options.imageWidth || 200,
                    allowCrop: options.allowCrop || false
                }, (resData) => {
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
                    if(resData && resData.resCode == 0 && resData.data && resData.data && resData.data.length){
                        resolve(resData);
                    }else{
                        resData.msg && modal.alert({
                            message: resData.msg || '上传图片失败',
                            okTitle: '确定'
                        })
                        reject(resData);
                    }
                });
            });
        }
    }
}

Vue.use(Camera)
