var strategies = {
    _isdate: function(intYear, intMonth, intDay) {
        if (isNaN(intYear) || isNaN(intMonth) || isNaN(intDay)) return false;
        if (intMonth > 12 || intMonth < 1) return false;
        if (intDay < 1 || intDay > 31) return false;
        if ((intMonth == 4 || intMonth == 6 || intMonth == 9 || intMonth == 11) && intDay > 30) return false;
        if (intMonth == 2) {
            if (intDay > 29) return false;
            if ((intYear % 100 == 0 && intYear % 400 != 0 || intYear % 4 != 0) && intDay > 28) return false;
        }
        return true;
    },

    //昵称校验()
    isChinese: function(val, errorMsg) {
        var chinese = /^(?:\[[^\[\]]+\])+$/;  // 表情正则
        if (chinese.test(val)) {
           return errorMsg;
        }
    },
    required: function(val, errMsg) {
        if (val == '') {
            return errMsg;
        }
    },
    //京医通卡号
    isCardno: function(val, errMsg) {
        var regcardNo = new RegExp('^[0-9]*$');
        if (!regcardNo.test(val) || val.length != 14 && val.length != 16){
            return errMsg;
        }
    },

    // 社保卡号
    isSocioCardno: function(val, errMsg) {
        var str = new RegExp('^[A-Z]$');
        var num = new RegExp('^[0-9]+$'), cardLen = val.length;
        var cardFliter1 = cardLen === 12 && num.test(val.slice(0, 11));
        var cardFliter2 = cardFliter1 && (num.test(val.slice(11)) || str.test(val.slice(11)));
        if(!cardFliter2){
            return errMsg;
        }
    },

    isString: function(val, errMsg){
        var reg1 = /[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;//特殊字符
        var reg2 = /^[0-9]+$/g;//数字
        if(reg1.test(val) || reg2.test(val)) {
            return errMsg;
        }
    },

    //姓名字节
    strlen: function(val, len, errMsg) {
        var lens = 0;
        for (var i = 0; i < val.length; i++) {
            var c = val.charCodeAt(i);
            //单字节加1
            if (c >= 0x0001 && c <= 0x007e || 0xff60 <= c && c <= 0xff9f) {
                lens++;
            } else {
                lens += 2;
            }
        }
        if (lens > len) {
            return errMsg;
        }
        // if (lens < len || lens > len) {
        //     return errMsg;
        // }
    },

    minLength: function(val, len, errMsg) {
        if (val.length < len) {
            return errMsg;
        }
    },
    maxLength: function(val, len, errMsg) {
        if (val.length > len) {
            return errMsg;
        }
    },
    isMobile: function(val, errMsg) {
        // var isMobile = /^0?(13[0-9]|15[012356789]|18[0123456789]|14[57]|17[0-9])[0-9]{8}$/g;
        var isMobile = /(^1[3|4|5|7|8][0-9]{9}$)/;
        if(!isMobile.test(val)){
            return errMsg;
        }
    },


    //验证码校验（四位数字）
    isVerifCode: function(val, errMsg) {
        var isNumber = /^[0-9]{4}$/;
        var isNumber2 = /^[0-9]{6}$/;
        if (!(isNumber.test(val) || isNumber2.test(val))) {
            return errMsg;
        }
    },

    // 密码校验(6-16位数字、字母的组合)
    isPassword: function(val, errMsg) {
        var isnumAz = /^[0-9a-zA-Z]{6,16}$/;
        //var isnumAz = /^(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,16}$/;
        if (!isnumAz.test(val)) {
            return errMsg;
        }
    },

    isBirthday: function(val, errMsg) {
        var value = val.trim();
        if (value.length != 8) {
            return errMsg;
        }
        var year = parseInt(value.slice(0, 4), 10);
        var month = parseInt(value.slice(4, 6), 10);
        var day = parseInt(value.slice(6), 10);
        if (!strategies._isdate(year, month, day)) {
            return errMsg;
        }
    },

    //身份证号码校验
    isIdCode: function(val, errMsg) {
        if (!val) return errMsg;
        val = val.toUpperCase();
        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
        /*if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(val))) {
        return errMsg;
        }*/
        //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
        //下面分别分析出生日期和校验位
        var len, re;
        len = val.length;
        if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(val))) {
            return errMsg;
        }

        if (len == 15) {
            re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
            var arrSplit = val.match(re);
            //检查生日日期是否正确
            var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
            var bGoodDay;
            bGoodDay = strategies._isdate('19' + arrSplit[2], arrSplit[3], arrSplit[4]);
            if (!bGoodDay) {
                return errMsg;
            } else {
                //将15位身份证转成18位
                //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
                var nTemp = 0,
                    i;
                val = val.substr(0, 6) + '19' + val.substr(6, val.length - 6);
                for (i = 0; i < 17; i++) {
                    nTemp += val.substr(i, 1) * arrInt[i];
                }
                val += arrCh[nTemp % 11];
                //return true;
            }
        }
        if (len == 18) {
            re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
            var arrSplit = val.match(re);
            //检查生日日期是否正确
            var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
            var bGoodDay;
            bGoodDay = strategies._isdate(arrSplit[2], arrSplit[3], arrSplit[4]);
            if (!bGoodDay) {
                return errMsg;
            } else {
                //检验18位身份证的校验码是否正确。
                //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
                var valval;
                var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
                var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
                var nTemp = 0,
                    i;
                for (i = 0; i < 17; i++) {
                    nTemp += val.substr(i, 1) * arrInt[i];
                }
                valval = arrCh[nTemp % 11];
                if (valval != val.substr(17, 1)) {
                    return errMsg;
                }
            }
        } else {
            if (!(/^[a-zA-Z0-9]{5,19}$/.test(val))) { //其他证件 5-19位，[A-Za-z0-9]
                return errMsg;
            }
        }
    },

    isText:function(val, errMsg){
        var text = /^[\s\u4e00-\u9fa5_a-zA-Z0-9_,\.;\:"'!！*%#@￥$&·“”?？<>《》，（）()~+=：、|{}[\]【】]{1,300}$/;
        if(!text.test(val)) {
            return errMsg;
        }
    }
};

/**
 * 接受验证的数组
 */
export default function validate(arr) {
    var obj = {
        status: true
    };
    for (var i = 0, l1 = arr.length; i < l1; i++) {
        var item = arr[i];
        var stop = false;
        for (var k = 0, l2 = item.rules.length; k < l2; k++) {
            var r = item.rules[k];
            var arg = r.rule.split(':');
            var rule = arg.shift();
            if (r.type) {
                arg.unshift(r.type);
            }
            arg.unshift(item.value);
            arg.push(r.msg);
            var status = strategies[rule].apply(null, arg);
            if (status) {
                obj = {
                    value: item.value,
                    status: false,
                    msg: status
                };
                stop = true;
                break;
            }
        }
        if (stop) break;
    }
    return obj;
};
