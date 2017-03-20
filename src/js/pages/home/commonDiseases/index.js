/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-03-15
*/

import { mapActions, mapGetters } from 'vuex';

module.exports = {
    computed: mapGetters(['COMMONDISEASES_list']),
    methods: {
        ...mapActions(['GET_COMMONDISEASES_LIST']),
        goToCommonDiseases(item) {
            this.$BM_router.open({
                page: 'commonDiseases_diseaseDetails',
                params: {
                    id: item.id,
                    name: item.diseaseName
                }
            })
        }
    },
    mounted(){
        this.GET_COMMONDISEASES_LIST(this);
    }
}
