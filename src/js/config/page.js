/**
 * @Author: songqi
 * @Date:   2017-01-10
* @Last modified by:   songqi
* @Last modified time: 2017-03-18
 */

const PAGECONFIG = {
    /************
     ** 首页 **
     *************/
    'newHome': {
        url: '/pages/newHome/index.js',
        title: '京医通'
    },
    'search_home': {
        url: '/pages/search/home/index.js',
    },
    'search_detail': {
        url: '/pages/search/detail/index.js'
    },
    'healthManagement': {
        url: '/pages/healthManagement/index.js',
        title: '健康管理'
    },
    'home': {
        url: '/pages/index/index.js',
    },
    'register_selectHospital': {
        url: '/pages/register/selectHospital/index.js',
        title: '选择医院'
    },
    'register_deptDoct': {
        url: '/pages/register/deptDoct/index.js',
        title: '选择科室'
    },
    'register_selectResource': {
        url: '/pages/register/selectResource/index.js',
        title: '选择号源'
    },
    'register_selectCard': {
        url: '/pages/register/selectCard/index.js',
        title: '选择就诊人'
    },
    'recharge_home': {
        url: '/pages/recharge/home/index.js',
        title: '充值'
    },
    'healthSelfExamination_diseaseType': {
        url: '/pages/healthSelfExamination/diseaseType/index.js',
        title: '健康自查'
    },
    'healthSelfExamination_diseaseSymptoms': {
        url: '/pages/healthSelfExamination/diseaseSymptoms/index.js',
        title: '健康自查'
    },
     'healthSelfExamination_selfResults': {
        url: '/pages/healthSelfExamination/selfResults/index.js',
        title: '健康自查'
    },
    // 常见疾病百科
    'commonDiseases_diseaseDetails': {
        url: '/pages/commonDiseases/diseaseDetails/index.js',
        title: '常见疾病百科'
    },
    'commonDiseases_understandDeeper': {
        url: '/pages/commonDiseases/understandDeeper/index.js',
        title: '常见疾病百科'
    },

    /************
     ** 成功页 **
     *************/
    'success': {
        url: '/pages/success/index.js'
    },

    // 健康咨询
    'healthConsultation': {
        url: '/pages/healthManagement/healthConsultation/home/index.js',
        title: '健康咨询'
    },
    // 健康咨询 --> 提交问题
    'healthConsultation_submitProblem': {
        url: '/pages/healthManagement/healthConsultation/submitProblem/index.js',
        title: '健康咨询'
    },
    // 健康咨询 --> 医生列表
    'healthConsultation_doctorList': {
        url: '/pages/healthManagement/healthConsultation/doctorList/index.js',
        title: '医生列表'
    },
    // 健康咨询 --> 提交问题成功
    'healthConsultation_submitSuccess': {
        url: '/pages/healthManagement/healthConsultation/submitSuccess/index.js',
        title: '健康咨询'
    },
    // 健康咨询 --> 咨询记录
    'healthConsultation_consultationRecord': {
        url: '/pages/healthManagement/healthConsultation/consultationRecord/index.js',
        title: '咨询记录'
    },
    // 健康评估
    'healthAssessment': {
        url: '/pages/healthManagement/healthAssessment/home/index.js',
        title: '健康评估'
    },
    // 健康评估 -> 答题页
    'selfTesting': {
        url: '/pages/healthManagement/healthAssessment/selfTesting/index.js',
        title: '健康评估'
    },
    // 健康评估 --> 评估结果
    'testResult': {
        url: '/pages/healthManagement/healthAssessment/testResult/index.js',
        title: '健康评估'
    },
    /************
     ** 挂号记录页 **
     *************/
    // 挂号记录列表页
    // register  NotPayRecord
    // params: {
    //     "type": "register",
    //     "listType": "PayRecord",
    //     "cardNo": ""
    // }
    'record_list': {
        url: '/pages/record/list/index.js'
    },
    // 挂号记录详情页
    'record_detail': {
        url: '/pages/record/detail/index.js'
    },
    'login': {
        url: '/pages/userLogin/login/index.js',
        title: '登录'
    },

    /************
     ** 个人中心 **
     *************/
    // 个人中心首页
    'account_home': {
        url: '/pages/account/home/index.js',
        title: '个人中心'
    },
    'account_paid_list': {
        url: '/pages/account/paid/list/index.js',
        title: '缴费记录'
    },
    'account_paid_detail': {
        url: '/pages/account/paid/detail/index.js',
        title: '缴费详情'
    },
    'account_abountUs': {
        url: '/pages/account/abountUs/index.js',
        title: '关于我们'
    },
    'account_abountUs_jytIntroduction': {
        url: '/pages/account/abountUs/jytIntroduction/index.js',
        title: '京医通简介'
    },
    'account_abountUs_serviceAgreement': {
        url: '/pages/account/abountUs/serviceAgreement/index.js',
        title: '服务协议'
    },
    'account_abountUs_shareFriends': {
        url: '/pages/account/abountUs/shareFriends/index.js',
        title: '分享好友'
    },
    'account_abountUs_fiveStar': {
        url: '/pages/account/abountUs/fiveStar/index.js',
        title: '五星好评'
    },

    'account_fontSize': {
        url: '/pages/account/fontSize/index.js',
        title: '字体大小'
    },
     // 个人中心 -> 忘记密码
    'account_forgetPassword': {
        url: '/pages/account/forgetPassword/index.js',
        title: '忘记密码'
    },
    // 个人中心 -> 卡详情
    'account_cardDetail': {
        url: '/pages/account/cardDetail/index.js',
        title: '卡详情'
    },
    // 个人中心 -> 卡资料
    'account_cardInfo': {
        url: '/pages/account/cardInfo/index.js',
        title: '卡资料'
    },
    // 个人中心 -> 交易记录
    'account_transactionRecord': {
        url: '/pages/account/transactionRecord/index.js',
        title: '交易记录'
    },
    // 个人中心 -> 账户管理首页
    'account_management_home': {
        url: '/pages/account/management/home/index.js',
        title: '账号管理'
    },
    // 个人中心 -> 账户管理 -> 昵称
    'account_management_nickname': {
        url: '/pages/account/management/nickname/index.js',
        title: '修改昵称'
    },
    // 个人中心 -> 账户管理 -> 手机号
    'account_management_phone': {
        url: '/pages/account/management/phone/index.js',
        title: '更换手机号'
    },
    // 个人中心 -> 账户管理 -> 修改手机号
    'account_management_changePhone': {
        url: '/pages/account/management/changePhone/index.js',
        title: '更换手机号'
    },
    // 个人中心 -> 账户管理 -> 设置密码
    'account_management_password': {
        url: '/pages/account/management/password/index.js',
        title: '设置登录密码'
    },
    // 个人中心 -> 账户管理 -> 实名认证
    'account_management_verified': {
        url: '/pages/account/management/verified/index.js',
        title: '实名认证'
    },
    // 个人中心 -> 绑定新卡（选择绑卡类型）
    'account_selectBindCard': {
        url: '/pages/account/selectBindCard/index.js',
        title: '绑定新卡'
    },
    // 个人中心 -> 绑卡 -> 绑临时卡
    'account_bindCard_temp': {
        url: '/pages/account/bindCard/temp/index.js',
        title: '登记建卡'
    },
    // 个人中心 -> 绑卡 -> 绑京医通卡、社保卡
    'account_bindCard_formal': {
        url: '/pages/account/bindCard/formal/index.js',
        title: '绑卡'
    },
    // 个人中心 -> 绑卡 -> 完善资料
    'account_bindCard_perfectInformation': {
        url: '/pages/account/bindCard/perfectInformation/index.js',
        title: '完善资料'
    },
    //个人中心 -> 咨询列表 -> 首页
    'account_consult_home': {
        url: '/pages/account/consult/home/index.js',
        title: '咨询列表'
    },
    //个人中心 -> 咨询列表 -> 答题室
    'account_consult_submitProblem': {
        url: '/pages/account/consult/submitProblem/index.js',
        title: '答题室'
    },
    //个人中心 -> 咨询列表 -> 问题列表
    'account_consult_problemList': {
        url: '/pages/account/consult/problemList/index.js',
        title: '咨询列表'
    },
    //个人中心 -> 咨询列表 -> 榜单
    'account_consult_answerList': {
        url: '/pages/account/consult/answerList/index.js',
        title: '榜单'
    },
    // 个人中心 -> 我的就诊卡
    'account_cards': {
        url: '/pages/account/myCards/cardList/index.js',
        title: '我的就诊卡'
    },
    // 选择民族
    'account_bindCard_selectNation': {
        url: '/pages/account/bindCard/selectNation/index.js',
        title: '选择民族'
    },
    // 服务协议
    'agreement': {
        url: '/pages/agreement/index.js',
        title: '服务协议'
    },
    /************
     ** 智能导诊 **
     *************/
     // 智能导诊首页
    'smartRegister_home': {
        url: '/pages/smartRegister/home/index.js',
        title: '智能导诊'
    },
    // 智能导诊-选择医院页面
   'smartRegister_hospitals': {
       url: '/pages/smartRegister/hospitals/index.js',
       title: '导诊结果'
   },

    /************
     ** 消息 **
     *************/
     // 消息列表
    'message_lists': {
        url: '/pages/message/lists/index.js',
        title: '消息'
    },
    'message_detail': {
        url: '/pages/message/detail/index.js',
        title: '消息详情'
    },
    /************
     ** 消息 **
     *************/
    //  青年医生说
    'youthDoctorSpeaking_list': {
        url: '/pages/youthDoctorSpeaking/list/index.js',
        title: '青年医生说'
    },
    'youthDoctorSpeaking_detail': {
        url: '/pages/youthDoctorSpeaking/detail/index.js',
        title: '青年医生说详情'
    },
    'test': {
        url: '/pages/test/index.js',
        title: '测试'
    },

    //  知名专家团队
    'specialist_home': {
        url: '/pages/specialist/home/index.js',
        title: '知名专家团队'
    },
    //  知名专家团队 --> 搜索结果页specialDisease
    'specialist_detail': {
        url: '/pages/specialist/detail/index.js',
        title: '知名专家团队'
    },
    //  专病专症门诊
    'specialDisease_home': {
        url: '/pages/specialDisease/home/index.js',
        title: '专病专症门诊'
    },
    //  专病专症门诊 --> 介绍
    'specialDisease_detail': {
        url: '/pages/specialDisease/detail/index.js',
        title: '专病专症门诊'
    },
    //  专病专症门诊 --> 介绍
    'specialDisease_suggest': {
        url: '/pages/specialDisease/suggest/index.js',
        title: '专病专症门诊'
    },

    // 检验报告 --> 查询条件
    'reportQuery_conditionalQuery': {
        url: '/pages/reportQuery/conditionalQuery/index.js',
        title: '报告查询'
    },
    'reportQuery_queryList': {
        url: '/pages/reportQuery/queryList/index.js',
        title: '报告列表'
    },
    'reportQuery_identityCheck': {
        url: '/pages/reportQuery/identityCheck/index.js',
        title: '身份验证'
    },
    'reportQuery_queryDetail': {
        url: '/pages/reportQuery/queryDetail/index.js',
        title: '报告详情'
    },

    // 门诊缴费
    'unpaid_list': {
        url: '/pages/unpaid/list/index.js',
        title: '门诊缴费'
    },
    'unpaid_detail': {
        url: '/pages/unpaid/detail/index.js',
        title: '待缴费记录详情'
    },
    'unpaid_success': {
        url: '/pages/unpaid/success/index.js',
        title: '缴费成功'
    },


    // 投诉建议
    'complaintProposal': {
        url: '/pages/complaintProposal/index.js',
        title: '投诉建议'
    },
    // 药价查询
    'priceSearch': {
        url: '/pages/priceSearch/detail/index.js',
        title: '药价查询'
    },
    // 住院订餐
    'orderFood': {
        url: '/pages/orderFood/detail/index.js',
        title: '药价查询'
    },
    // 报告解读
    'reportInterpretation': {
        url: '/pages/reportInterpretation/detail/index.js',
        title: '报告解读'
    },
    // 体检预约
    'appointmentExamination': {
        url: '/pages/appointmentExamination/detail/index.js',
        title: '体检预约'
    },
    // 转诊社区
    'transfer': {
        url: '/pages/transfer/detail/index.js',
        title: '转诊社区'
    },
    // 护理服务
    'nursingService': {
        url: '/pages/nursingService/detail/index.js',
        title: '药价查询'
    },
    // 打疫苗 --> 选择疫苗类型
    'vaccination_selectVaccine': {
        url: '/pages/vaccination/selectVaccine/index.js',
        title: '查询疫苗接种医院'
    },
    // 打疫苗 --> 选择接种医院
    'vaccination_selectHospital': {
        url: '/pages/vaccination/selectHospital/index.js',
        title: '查询疫苗接种医院'
    },

    /************
     ** webView **
     *************/
    // 单独使用一个 view 打开页面
    'webView': {
        url: '/pages/webView/index.js'
    }
}

const HOSTBASE = '//fe.benmu-health.com/app-benmu-health/dist/html';

const getBaseURL = () => {
    var baseUrl = '';
    if (typeof window === 'object') {
        baseUrl = HOSTBASE + '?page=';
    }
    return baseUrl;
}

export const getPageUrl = (page) => {
    let url = PAGECONFIG[page]['url'];
    let title = PAGECONFIG[page]['title']
        // return getBaseURL() + url + '&title=' + title;
    return {
        url: getBaseURL() + url,
        title: title
    }
}
