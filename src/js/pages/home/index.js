/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-03-01
*/

import 'Common/base'

import Home from './index.vue'

import store from 'Store/home/'

new Vue(Vue.util.extend({ el: '#root', store}, Home))
