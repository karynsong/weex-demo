export default {
    props: {
        hosList: {
            type: 'Array',
            default: []
        }
    },
    methods: {
        goToDept(item){
            this.$emit('goToDept', item);
        }
    }
}