/**
* @Author: songqi
* @Date:   2017-01-16
* @Last modified by:   songqi
* @Last modified time: 2017-03-28
*/

// iconfont 引用
var dom = weex.requireModule('dom');
dom.addRule('fontFace', {
    'fontFamily': "iconfont",
    'src': "url('xxx/iconfont.ttf')"
});

// 引用公共组件
// 配置方法
import 'Widget/appConfig.js';
// 弹窗
import 'Widget/modal.js';
// 路由
import 'Widget/router.js';
// 发送请求
import 'Widget/axios.js';
// 获取地理位置
import 'Widget/geolocation.js';
// 获取相机信息
import 'Widget/camera.js';
// 设置title
import 'Widget/header.js';
// 支付相关
import 'Widget/pay.js';
// 存储相关
import 'Widget/storage.js';
// 全局事件
import 'Widget/globalEvent.js';
// 分享
import 'Widget/share.js';
