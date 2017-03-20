export default {
    props: {
        title: {
            type: 'String',
            default: '请选择'
        },
        btnName: {
            type: 'String',
            default: '取消'
        }
    },
    methods: {
        cancel(){
            this.$emit('cancel');
        }
    }
}