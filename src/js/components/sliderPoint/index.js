/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-02-27
*/

export default {
    data(){
        return {
            index: 1
        }
    },
    props: ['num'],
    methods: {
        silderChange(event){
            this.index = event.index + 1;
        }
    }
}
