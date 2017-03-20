/**
* @Author: songqi
* @Date:   2017-02-06
* @Last modified by:   songqi
* @Last modified time: 2017-03-20
*/

module.exports = {
    'server': {
        'path': '../',
        'port': 80
    },
    'proxy': [{
        'route': '/mossad',
        'target': '127.0.0.1:52077/mossad'
    }],
    'mockServer': {
        'port': 52077,
        'mockDir': './dist/mock'
    },
    'exports': [
        /************
         ** 首页 **
         *************/
        'js/pages/home/index.js'
    ],
    'framework': '// { "framework": "Vue" } \n',
    'alias': {
        'Components': 'js/components',
        'BaseLibs': 'js/baseLibs',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'Utils': 'js/utils',
        'Store': 'js/store'
    },
    'weex': true,
    'appName': 'demo',
    'jsPath': 'https://xxx.xxx.com/app/',
    'zipFolder': '/home/app',
    'versionSavePath': 'http://xxx.xxx.xxx/mobile/app/version/save',
    'version': {
        'android': '1.0.0',
        'iOS': '1.0.0'
    }
};
