/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-03-28
*/

module.exports = {
    methods: {
        goToSearch(){
            this.$BM_router.open({
                page:'search_home',
                hideNavbar: true,
                params: {
                    searchRange: ['hospital', 'department', 'experts']
                }
            })
        }
    }
}
