/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-03-17
*/

module.exports = {
    methods: {
        goToComplaintProposal(){
            this.$BM_router.open({
                authorize: true,
                page: 'complaintProposal',
                title: '投诉建议'
            })
        },
        goToVaccination(){
            this.$BM_router.open({
                page: 'vaccination_selectVaccine',
                title: '选择疫苗接种医院'
            })
        },
        goToPriceSearch(){
            this.$BM_router.open({
                page: 'priceSearch',
                title: '药价查询'
            })
        },
        goToOrderFood(){
            this.$BM_router.open({
                page: 'orderFood',
                title: '住院订餐'
            })
        },
        goToNursingService(){
            this.$BM_router.open({
                page: 'nursingService',
                title: '护理服务'
            })
        },
        goToReportInterpretation(){
            this.$BM_router.open({
                page: 'reportInterpretation',
                title: '报告解读'
            })
        },
        goToAppointmentExamination(){
            this.$BM_router.open({
                page: 'appointmentExamination',
                title: '体检预约'
            })
        },
        goToTransfer(){
            this.$BM_router.open({
                page: 'transfer',
                title: '转诊社区'
            })
        }
    }
}
