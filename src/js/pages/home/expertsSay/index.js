/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-03-13
*/

import { mapActions, mapGetters } from 'vuex';
import SliderPoint from 'Components/sliderPoint/index.vue';

module.exports = {
    computed: mapGetters(['EXPERTSSAY_list']),
    methods: {
        ...mapActions(['GET_EXPERTSSAY_ARTICLE', 'UPDATE_EXPERTSSAY_READ']),
        openArticle(item){
            if(!item.articleUrl){
                this.$BM_modal.alert({
                    message: '获取文字失败'
                })
            }
            this.UPDATE_EXPERTSSAY_READ({
                vm: this,
                id: item.id
            });
        }
    },
    components: {
        'slider-point': SliderPoint
    },
    mounted(){
        this.GET_EXPERTSSAY_ARTICLE(this);
    }
}
