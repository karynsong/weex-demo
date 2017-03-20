/**
 * @Author: songqi
 * @Date:   2017-01-11
* @Last modified by:   songqi
* @Last modified time: 2017-03-14
 */

var modal = weex.requireModule('bmModal'),
    router = weex.requireModule('bmRouter'),
    storage = weex.requireModule('bmStorage'),
    globalEvent = weex.requireModule('globalEvent');

import isEmpty from 'lodash/isEmpty';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import {
    getPageUrl
} from 'Config/page';
import {
    DEFAULT_ANIMATETYPE
} from 'Config/environment';

var Router = {
    // 页面将要出现
    viewWillAppear: [],
    // 页面已经出现
    viewDidAppear: [],
    // 页面被拿出栈时即将展示
    viewWillBackAppear: [],
    // 页面被拿出栈时已经展示
    viewDidBackAppear: [],
    // 页面将要放在栈中
    viewWillDisappear: [],
    // 页面已经放在栈中
    viewDidDisappear: []
};

globalEvent.addEventListener("viewWillAppear", function(options) {
    if(options.type === 'open' || options.type === 'refresh'){
        router.getParams((params) => {
            Router.viewWillAppear.map((item) => {
                item(params, options);
            });
        });
    }else if(options.type === 'back'){
        storage.getData('MAIN_backParams', (resData) => {
            Router.viewWillBackAppear.map((item) => {
                item(JSON.parse(resData.data.value || '{}'), options);
            });
        });
    }
});

globalEvent.addEventListener("viewDidAppear", function(options) {
    if(options.type === 'open' || options.type === 'refresh'){
        router.getParams((params) => {
            Router.viewDidAppear.map((item) => {
                item(params, options);
            });
        });
    }else if(options.type === 'back'){
        storage.getData('MAIN_backParams', (resData) => {
            Router.viewDidBackAppear.map((item) => {
                item(JSON.parse(resData.data.value || '{}'), options);
            });
            storage.deleteData('MAIN_backParams');
        });
    }
});

globalEvent.addEventListener("viewWillDisappear", function(options) {
    modal.hideLoading()
    Router.viewWillDisappear.map((item) => {
        item(options);
    });
});

globalEvent.addEventListener("viewDidDisappear", function(options) {
    Router.viewDidDisappear.map((item) => {
        item(options);
    });
});

Router.install = (Vue, options) => {
    Vue.mixin({
        beforeCreate() {
            if(this.$options.bmRouter){
                var bmRouter = this.$options.bmRouter;
                for(var i in bmRouter){
                    if(!Router[i]){
                        Router[i] = [];
                    }
                    Router[i].push(bmRouter[i].bind(this));
                }
            }
        }
    })
    Vue.prototype.$BM_router = {
        getUrl(page) {
            var pageCfg = getPageUrl(page);
            if (!pageCfg) {
                modal.alert({
                    message: '跳转页面不存在',
                    okTitle: '确定'
                });
                return false;
            }
            return pageCfg;
        },
        open(options) {
            options = options || {};
            var pageCfg = this.getUrl(options.page);
            if (pageCfg && pageCfg.url) {
                if(options.hideNavbar && !options.statusBarStyle){
                    options.statusBarStyle = 'Default';
                }
                return new Promise((resolve, reject) => {
                    router.open({
                        url: pageCfg.url,
                        animateType: options.animateType || DEFAULT_ANIMATETYPE,
                        params: options.params || {},
                        authorize: options.authorize || false,
                        navigationInfo: {
                            statusBarStyle: options.statusBarStyle || 'LightContent',
                            hideNavbar: options.hideNavbar || false,
                            title: options.title || pageCfg.title
                        }
                    }, (data) => {
                        if (isFunction(options.callback)) {
                            options.callback.call(this, data);
                        }
                        resolve(data);
                    });
                });
            }
        },
        back(options) {
            options = options || {};
            return new Promise((resolve, reject) => {
                router.back({
                    length: options.length || 1,
                    animateType: options.animateType || DEFAULT_ANIMATETYPE,
                    params: options.params || {},
                }, (data) => {
                    if (isFunction(options.callback)) {
                        options.callback.call(this, data);
                    }
                    resolve(data);
                });
            });
        },
        getParams(callback) {
            return new Promise((resolve, reject) => {
                router.getParams((params) => {
                    if (isFunction(callback)) {
                        callback.call(this, params);
                    }
                    resolve(params);
                });
            });
        },
        refresh(){
            router.refreshWeex();
        },
        backHome(homePageIndex){
            router.backHome({
                homePageIndex: homePageIndex || 0
            });
        },
        setBackParams(params) {
            if(isPlainObject(params)){
                storage.setData('MAIN_backParams', JSON.stringify(params));
            }
        },
        loginSuccess(userInfo) {
            router.loginSuccess(userInfo)
        },
        toLogin() {
            router.toLogin()
        },
        toWebView(params){
            if(!params.url){
                return;
            }
            params.title = params.title || '京医通';
            router.toWebView(params)
        },
        toMap(cfg) {
            if(!cfg.destination) return
            router.toMap({
                destination: cfg.destination
            })
        },
        callPhone(phone) {
            if(phone) {
                router.callPhone({
                    phone: phone
                })
            }
        }
    }
}

Vue.use(Router)
