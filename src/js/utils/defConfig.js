var CARDINFO = {
    'JYT_TEMP': {
        'status': {
            'OK': {
                // 'cardTit': '北京通·京医通',
                // 'className': 'account-lsk',
                // 'cardName': '临时卡',
                'recharge': false,
                'record': false,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            }
        }
    },
    'JYT': {
        'status': {
            'OK': {
                // 'cardTit': '北京通·京医通',
                // 'className': '',
                // 'cardName': '',
                'recharge': true,
                'record': true,
                'cardInfo': true,
                'unbind': true,
                'loss': true
            },
            'NORMAL_REPORT_LOST': {
                // 'cardTit': '北京通·京医通（正式挂失）',
                // 'className': 'account-lsgs',
                // 'cardName': '',
                'recharge': false,
                'record': true,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            },
            'TEMP_REPORT_LOST': {
                // 'cardTit': '北京通·京医通（临时挂失）',
                // 'className': 'account-lsgs',
                // 'cardName': '',
                'recharge': false,
                'record': true,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            },
            'ABSENT_CARD': {
                // 'cardTit': '北京通·京医通（已退卡）',
                // 'className': 'account-lsgs',
                // 'cardName': '',
                'recharge': false,
                'record': true,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            },
            'FREEZE_CARD': {
                // 'cardTit': '北京通·京医通（已冻结）',
                // 'className': 'account-lsgs',
                // 'cardName': '',
                'recharge': false,
                'record': true,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            }
        },
        'showMoney': true
    },
    'SOCIAL_SECURITY': {
        'status': {
            'OK': {
                // 'cardTit': '北京社保卡－北京通·京医通账户',
                // 'className': 'account-shebaoka',
                // 'cardName': '',
                'recharge': true,
                'record': true,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            }
        },
        'showMoney': true
    },
    'SOCIAL_SECURITY_TEMP': {
        'status': {
            'OK': {
                // 'cardTit': '北京社保卡－北京通·京医通账户',
                // 'parentclassName': 'account-shebaoka',
                // 'className': 'account-shebaoka',
                // 'cardName': '预约开户',
                'recharge': false,
                'record': false,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            },
            'INVALID': {
                // 'cardTit': '北京社保卡－北京通·京医通账户',
                // 'parentclassName': 'account-lsgs',
                // 'className': 'account-lsgs',
                // 'cardName': '无效账户',
                'recharge': false,
                'record': false,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            }
        },
        'showMoney': false
    },
    // 枚举，历史数据
    'UNVALID_SOCAL_SECURITY': {
        'status': {
            'INVALID': {
                // 'cardTit': '北京社保卡－北京通·京医通账户',
                // 'parentclassName': 'account-lsgs',
                // 'className': 'account-lsgs',
                // 'cardName': '无效账户',
                'recharge': false,
                'record': false,
                'cardInfo': true,
                'unbind': true,
                'loss': false
            }
        },
        'showMoney': false
    }
};
module.exports = CARDINFO;