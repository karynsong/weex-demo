/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-03-14
*/

import { mapActions, mapGetters } from 'vuex';

module.exports = {
    computed: mapGetters(['CARD_list']),
    methods: {
        ...mapActions(['GET_CARD_LIST']),
        goToUnpaidList(){
            this.$BM_router.open({
                authorize: true,
                page: 'unpaid_list'
            });
        },
        goToRecharge(){
            this.$BM_router.open({
                authorize: true,
                page: 'recharge_home',
                title: '充值'
            });
        },
        goToReportQuery(){
            this.GET_CARD_LIST({
                vm: this
            });
        }
    }
}
