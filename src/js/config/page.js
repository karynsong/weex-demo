/**
 * @Author: songqi
 * @Date:   2017-01-10
* @Last modified by:   songqi
* @Last modified time: 2017-03-28
 */

const PAGECONFIG = {
    /************
     ** 首页 **
     *************/
    'newHome': {
        url: '/pages/xxx/index.js',
        title: '京医通'
    }
}

const HOSTBASE = '//xxxxx.xxx.com/xxx';

const getBaseURL = () => {
    var baseUrl = '';
    if (typeof window === 'object') {
        baseUrl = HOSTBASE + '?page=';
    }
    return baseUrl;
}

export const getPageUrl = (page) => {
    let url = PAGECONFIG[page]['url'];
    let title = PAGECONFIG[page]['title']
        // return getBaseURL() + url + '&title=' + title;
    return {
        url: getBaseURL() + url,
        title: title
    }
}
