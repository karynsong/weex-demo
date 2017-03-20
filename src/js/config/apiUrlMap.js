/**
 * @Author: songqi
 * @Date:   2017-01-12
* @Last modified by:   songqi
* @Last modified time: 2017-03-20
 */

import {
    HOST_TEST3,
    HOST_PROD
} from 'Config/environment';

// 统一的失败处理回调 modal 是模态的引用，resData 是 response
export const HTTP_ERROR_FUNCTION = (modal, resData) => {
    // 这里可以做 resData.resCode 的统一处理
    modal.alert({
        message: resData.msg,
        okTitle: '确定'
    });
}

// 接口地址的 MAP
export const API_URL_MAP = {
    /************
     ** 首页相关 **
     *************/
    // 获取分类的文章
    'home_expertsSayArticle': '/mobile/app/article/topArticles',
    // 获取分类的更多文章
    'home_expertsSayArticle_more': '/mobile/app/article/articles',
    // 更行文章的已读
    'home_expertsSayRead': '/mobile/app/article/read',
    // 获取疾病百科的列表
    'home_commonDiseases': '/mobile/app/disease/distinctDisease',

    'register_selectHospital_getHospitals': '/mobile/app/product/hospitals',
    'register_selectDept_hostInfo': '/mobile/app/product/departments',
    'register_selectResource_list': '/mobile/app/product/list',
    'register_selectResource_listSearchKey': '/mobile/app/product/filterList',
    'register_selectResource_detail': '/mobile/app/product/detail',
    'register_selectResource_detailSearchKey': '/mobile/app/product/filterDetail',
    'register_preRegTimeCheck': '/mobile/app/order/preRegTimeCheck',
    'register_cardSelect': '/mobile/app/card/select',
    'register_cardSelect_preSaveCheck': '/mobile/app/order/preSaveCheck',
    'register_cardSelect_save': '/mobile/app/order/save',
    'register_cardPay': '/mobile/app/pay/jyt',
    'register_wxPay': '/mobile/app/pay/appForm',
    'register_checkPayStatue': '/mobile/app/order/checkPayStatus',
    'register_preCancelCheck': '/mobile/app/order/preCancelCheck',
    'register_cancel': '/mobile/app/order/cancel',
    'register_waitPayList': '/mobile/app/order/waitPayList',
    'register_waitPayDetail': '/mobile/app/fee/product/detail',
    'register_waitPaySave': '/mobile/app/fee/order/save',
    'register_waitPayForm': '/mobile/app/fee/pay/form',
    'register_waitPayPayList': '/mobile/app/fee/pay/payList',
    'register_waitPayJytPay': '/mobile/app/fee/pay/jytPay',
    'register_waitPayCheckPay': '/mobile/app/fee/order/checkPayStatus',
    'register_waitPaySuccess': '/mobile/app/fee/order/paySucc',
    'register_paidList': '/mobile/app/fee/order/list',
    'register_paidDetail': '/mobile/app/fee/order/detail',
    // 登录
    'login': '/mobile/app/user/login',
    // 获取短信验证码
    'login_verify_SMS': '/mobile/app/msg/verificationForSMS',
    // 获取语音验证码
    'login_verify_call': '/mobile/app/msg/verificationForVoice',
    /************
     ** 充值相关 **
     *************/
    // 获取充值配置信息
    'recharge_home_getRechargeConfig': '/mobile/app/recharge/config',
    // 获取卡信息，并确定是否检验用户姓名
    'recharge_home_checkMoney': '/mobile/app/recharge/queryCard',
    // 生成订单号
    'recharge_home_getOrderNo': '/mobile/app/recharge/order',
    // 生成 form 表单
    'recharge_home_getForm': '/mobile/app/recharge/form',
    // 获取支付列表
    'recharge_home_getPayList': '/mobile/app/recharge/payList',
    // 获取支付详情
    'recharge_home_getDetail': '/mobile/app/recharge/detail',
    /************
     ** 成功相关 **
     *************/
    // 获取充值成功详情
    'success_recharge': '/mobile/app/recharge/detail',
    //获取挂号成功详情
    'success_register': '/mobile/app/order/paySucc',

    // 疫苗接种   获取疫苗类型
    'vaccination_categories': '/mobile/app/vaccine/categories',
    // 疫苗接种   获取所有区域
    'vaccination_area': '/mobile/app/vaccine/allVaccineHos',
    // 疫苗接种   区域医院列表
    'vaccination_hospital': '/mobile/app/vaccine/vaccines',

    // 报告查询 医院及就诊卡列表
    'reportQuery_hosAndCard': '/mobile/app/sample/options',
    // 报告查询 查询列表
    'reportQuery_reportList': '/mobile/app/sample/list',

    /************
     ** 记录相关 **
     *************/
    // 充值记录相关
    'record_recharge_getList': '/mobile/app/recharge/record/app',
    'record_recharge_getDetail': '/mobile/app/recharge/detail',
    // 获取挂号单列表
    'record_register_getList': '/mobile/app/order/list',
    // 取消订单前验证
    'record_register_preCancelCheck': '/mobile/app/order/preCancelCheck',
    // 取消订单
    'record_register_cancelOrder': '/mobile/app/order/cancel',
    'record_register_getDetail': '/mobile/app/order/detail',

    /************
     ** 智能导诊 **
     *************/
    // 获取只能导诊的列表
    'smartRegister_home_guideList': '/mobile/app/guide/list',
    // 获取医院列表
    'smartRegister_hospitals_getHosList': '/mobile/app/guide/depts',

    /************
     ** 个人中心 **
     *************/
    //  登出
    'account_management_home_logout': '/mobile/app/user/unlogin',
    // 更行头像
    'account_updateImg': '/mobile/app/user/info/updateImg',
    // 忘记密码
    'account_forgetPassword': '/mobile/app/user/pw/update',
    // 修改昵称
    'account_management_nickname_save': '/mobile/app/user/info/updateNickName',
    // 修改密码
    'account_management_password_save': '/mobile/app/user/pw/update',
    // 修改手机
    'account_management_phone_save': '/mobile/app/user/account/update',
    // 绑卡
    'account_bindCard_formal': '/mobile/app/card/bind',
    // 建卡
    'account_bindCard_temp': '/mobile/app/card/create',
    // 卡列表
    'account_myCards_list': '/mobile/app/user/info/cards',
    //卡详情
    'account_cardInfo': '/mobile/app/card/detail',
    // 解绑、挂失一个接口
    'account_unbindLoss': '/mobile/app/card/lost',
    // 交易记录
    'account_tranRecord': '/mobile/app/card/trade/list',
    /************
     ** 消息更新 **
     *************/
    // 获取消息未读列表
    'message_unread': '/mobile/app/msg/unreadCount',
    // 消息列表
    'message_lists': '/mobile/app/msg/list',
    // 更新消息已读
    'message_update': '/mobile/app/msg/updateToRead',

    // 青年医生说首页列表
    'youthDoctorSpeaking_list': '/mobile/app/youth/topDoctors',

    // 青年医生说首页点击更多列表
    'youthDoctorSpeaking_moreList': '/mobile/app/youth/doctors',

    // 健康助手 -> 咨询记录
    'health_helper_list': '/bjmc/app/authorize/health/getHealthTopicList',
    // 健康助手 -> 咨询详情
    'health_helper_detail': '/bjmc/app/authorize/health/getHealthTopicReplyList',
    // 健康助手 获取可提问医院列表
    'health_helper_ask_hos': '/bjmc/app/authorize/health/getHealthHospitalList',
    // 健康助手 提问
    'health_helper_ask_q': '/bjmc/app/authorize/health/insertHealthTopic',
    // 健康助手 追问
    'health_helper_ask_again': '/bjmc/app/authorize/health/insertHealthReply',
    // 健康评估列表
    'health_assess_list': '/mobile/app/assess/list',
    // 问题列表
    'health_assess_question_list': '/mobile/app/assess/question/list',
    // 健康评估结果
    'health_assess_result': '/mobile/app/assess/result',
    // 打点统计
    'RBISTATISTICS': '/bjmc/api/helpCenter/saveHelpCenterPvInfo',
    /************
     ** 知名专家团队 **
     *************/
    // 获取知名专家团队列表
    'specialist_home_getList': '/mobile/app/expert/list',
    // 获取某个知名专家团队信息
    'specialist_detail_getDetail': '/mobile/app/expert/detail',
    /************
     ** 知名专家团队 **
     *************/
    // 专病专诊获取门诊列表
    'specialDisease_home_getList': '/mobile/app/major/list',
    // 专病专诊获取详情
    'specialDisease_detail_getInfo': '/mobile/app/major/detail',
    // 专病专诊意见
    'specialDisease_suggest': '/mobile/app/advise/unLogin/save',
    /************
     ** 常见疾病百科 **
     *************/
    // 获取疾病百科详情
     'commonDiseases_diseaseDetails_getInfo': '/mobile/app/disease/disease',
    // 提供疾病百科意见
     'commonDiseases_diseaseDetails_putAdvise': '/mobile/app/disease/saveAdvice',
    // 疾病百科文章提供多页
    'commonDiseases_diseaseDetails_getMore': '/mobile/app/disease/articles',
    /************
     ** 投诉建议 **
     *************/
    // 提交投诉建议
    'complainProposal_sendInfo': '/mobile/app/advise/save'
};

export const getUrl = (urlKey) => {
    if (API_URL_MAP[urlKey]) {
        // 这里可以做 host 的线上线下切换，之后想要根据环境自动化
        return HOST_TEST3 + API_URL_MAP[urlKey];
    }
    return false;
}
