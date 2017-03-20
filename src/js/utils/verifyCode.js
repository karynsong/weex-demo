import assignIn from 'lodash/assignIn'
import cloneDeep from 'lodash/cloneDeep'
import EV from 'Utils/EV'

export default function VerifyCode(vm, cfg) {
    this.vm = vm
    assignIn(this, cloneDeep(new EV))
    this.cutDownTime = cfg && cfg.cutDownTime || 60
    this.leftTime = this.cutDownTime
    // canSend  可发送
    // sending  正在发送
    // sended   已发送
    // sendFail 发送失败
    this.sendStatus = 'canSend'
    // sms | call
    this.sendType = ''
    this.timer = null
}

VerifyCode.prototype = {
    getStatus() {
        return {
            sendStatus: this.sendStatus,
            sendType: this.sendType,
            leftTime: this.leftTime
        }
    },
    getCode(phone, type) {
        if(!phone) return
        let data = this.getStatus()
        if(data.sendStatus != 'canSend') return data
        this._setStatus('sending')
        this.sendType = type ? type : 'sms'
        this.vm.$BM_axios.fetch({
            url: type == 'call' ? 'login_verify_call' : 'login_verify_SMS',
            data: {
                phone: phone
            }
        }).then( res => {
        // setTimeout(() => {
            this._setStatus('sended')
            this._setCountDown()
        // }, 4000)
        }, res => {
             this._resetStatus()
             this.publish('getVerifyAPIError', res)
        })
    },
    _setCountDown() {
        this._cutDownTime()
        this.timer && clearInterval(this.timer)
        this.timer = setInterval(() => {
            if(this.leftTime < 1) {
                this.timer && clearInterval(this.timer)
                this.timer = null
                this._resetStatus()
            } else {
                this._cutDownTime()
            }
        }, 1000)
    },
    _cutDownTime() {
        this.leftTime--
        this.publish('timeChange', this.getStatus())
    },
    _setStatus(type) {
        this.sendStatus = type
        this.publish('statusChange', this.getStatus())
    },
    _resetStatus() {
        this.leftTime = this.cutDownTime
        this.sendType = ''
        this._setStatus('canSend')
    }
}
