/**
* @Author: songqi
* @Date:   2017-01-10
* @Last modified by:   songqi
* @Last modified time: 2017-01-17
*/

import isEmpty from 'lodash/isEmpty';

var platformInfo = {};
export const getPlatformInfo = (vm) => {
    var config = vm.$getConfig();

    if(isEmpty(platformInfo)){
        platformInfo = {
            osName:  config.env.osName,
            platform: config.env.platform,
            osVersion: config.env.osVersion,
            isWeb: config.env.platform === 'Web',
            isiOS: config.env.platform === 'iOS',
            isAndroid: config.env.platform === 'android',
        }
    }
    return platformInfo;
}
