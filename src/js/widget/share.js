const share = weex.requireModule('bmShare')

const Share = {}

Share.install = (Vue, options) => {
    Vue.prototype.$BM_share = {
        share(cfg) {
            return new Promise((resolve, reject) => {
                share.share({
                    title: cfg.title,
                    content: cfg.content || '',
                    icon: cfg.icon || '',
                    url: cfg.url || ''
                }, data => {
                    resolve(data)
                }, err => {
                    reject(err)
                })
            })
        }
    }
}

Vue.use(Share)
