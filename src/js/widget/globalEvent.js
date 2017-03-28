/**
* @Author: songqi
* @Date:   2017-02-27
* @Last modified by:   songqi
* @Last modified time: 2017-03-28
*/

import _isArray from 'lodash/isArray'

var globalEvent = weex.requireModule('globalEvent');

const GlobalEvent = {};
const GLOBALEVENT = {};

// app 被放到后台
globalEvent.addEventListener("appWillResignActive", function(options) {
    _isArray(GLOBALEVENT['appDeActive']) && GLOBALEVENT['appDeActive'].map((item) => {
        item(options);
    });
});

// app 从后台唤起
globalEvent.addEventListener("appDidBecomeActive", function(options) {
    _isArray(GLOBALEVENT['appActive']) && GLOBALEVENT['appActive'].map((item) => {
        item(options);
    });
});

GlobalEvent.install = (Vue, options) => {
    Vue.mixin({
        beforeCreate() {
            if(this.$options.bmGlobalEvent){
                var ev = this.$options.bmGlobalEvent;
                for(var i in ev){
                    if(!GLOBALEVENT[i]){
                        GLOBALEVENT[i] = [];
                    }
                    GLOBALEVENT[i].push(ev[i].bind(this));
                }
            }
        }
    })
}

Vue.use(GlobalEvent)
