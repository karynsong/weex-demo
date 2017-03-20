/**
* @Author: songqi
* @Date:   2017-03-03
* @Last modified by:   songqi
* @Last modified time: 2017-03-08
*/

var modal = weex.requireModule('bmModal'),
    router = weex.requireModule('bmRouter'),
    storage = weex.requireModule('bmStorage');

import _isUndefined from 'lodash/isUndefined';

export default function login(message){
    storage.deleteData('userInfo');
    storage.setData('MAIN_backParams', JSON.stringify({
        type: 'toLogin',
        msg: message
    }), () => {
        if(weex.config.bundleUrl.indexOf('/pages/home/index.js') === -1){
            router.backHome();
        }else{
            modal.alert({
                message,
                okTitle: '确定'
            }, () => {
                router.toLogin();
            });
        }
    });
}
