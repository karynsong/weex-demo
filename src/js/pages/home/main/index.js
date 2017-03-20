/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-02-27
*/

module.exports = {
    methods: {
        openRegister(){
            this.$BM_router.open({
                page: 'register_selectHospital'
            })
        },
        goTospecialist() {
            this.$BM_router.open({
                page: 'specialist_home'
            })
        },
        openSelfExamination(){
            this.$BM_router.open({
                page: 'healthSelfExamination_diseaseType'
            })
        },
        openSpecialDisease(){
            this.$BM_router.open({
                page: 'specialDisease_home'
            })
        }
    }
}
