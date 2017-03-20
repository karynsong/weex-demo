/**
* @Author: songqi
* @Date:   2017-03-02
* @Last modified by:   songqi
* @Last modified time: 2017-03-07
*/

import _isArray from 'lodash/isArray'
import {
    getPageUrl
} from 'Config/page';
import login from 'Utils/login';

// 事件分发器
export const distribute = (options, eventHandle) => {
    if(options.functionType === 'APP_OCCUPY'){
        login(options.aps && options.aps.alert || '您的北京通·京医通账号已经在其他设备登录，请注意账号安全。如果这不是你的操作，登录密码可能已泄露，请立即登录修改密码。');
    }else{
        commonMsg(options, eventHandle);
    }
}

// 用户消息推送
const commonMsg = (options, eventHandle) => {
    var pageCfg = getPageUrl('message_lists'),
        nowPage = weex.config.bundleUrl;
    if(options.trigger && nowPage.indexOf(pageCfg.url) === -1){
        router.open({
            url: pageCfg.url,
            animateType: 'PUSH',
            params: {},
            authorize: true,
            navigationInfo: {
                hideNavbar: false,
                title: pageCfg.title
            }
        });
    }else{
        _isArray(eventHandle['pushMessage']) && eventHandle['pushMessage'].map((item) => {
            item(options);
        });
    }
}
