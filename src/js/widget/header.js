/**
* @Author: songqi
* @Date:   2017-02-04
* @Last modified by:   songqi
* @Last modified time: 2017-02-09
*/



let header = weex.requireModule('bmHeader');

var Header = {};

Header.install = (Vue, options) => {
    Vue.prototype.$BM_header = {
        set(cfg){
            if(!cfg) return false
            header.setHeaderTitle({
                title: cfg.title
            })
        }
    }
}

Vue.use(Header)
