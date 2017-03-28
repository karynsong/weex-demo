/**
 * @Author: songqi
 * @Date:   2017-01-12
* @Last modified by:   songqi
* @Last modified time: 2017-03-28
 */

import {
    HOST_TEST3,
    HOST_PROD
} from 'Config/environment';

// 统一的失败处理回调 modal 是模态的引用，resData 是 response
export const HTTP_ERROR_FUNCTION = (modal, resData) => {
    // 这里可以做 resData.resCode 的统一处理
    modal.alert({
        message: resData.msg,
        okTitle: '确定'
    });
}

// 接口地址的 MAP
export const API_URL_MAP = {
    /************
     ** 首页相关 **
     *************/
    // 获取分类的文章
    'home_xxx': '/xxx'
};

export const getUrl = (urlKey) => {
    if (API_URL_MAP[urlKey]) {
        // 这里可以做 host 的线上线下切换，之后想要根据环境自动化
        return HOST_TEST3 + API_URL_MAP[urlKey];
    }
    return false;
}
