/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-03-18
*/

export default {
    data(){
        return {
            text: '',
            timer: null
        }
    },
    watch:{
        text(newVal){
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.goSearch(newVal, 'input');
            }, 200);
        }
    },
    methods: {
        back(){
            this.$BM_router.back();
        },
        goSearch(value, type){
            this.$emit('search', value, type);
        },
        goReturn(value){
            this.$refs.search.blur();
            this.goSearch(value, 'goSearch')
        },
        setText(text){
            this.text = text;
        }
    }
}
