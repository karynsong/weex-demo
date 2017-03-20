<template>
    <div class="wrap">

        <!--  头部  -->
        <layout-header></layout-header>
        <list>
            <cell>
                <!--  主要功能  -->
                <main></main>
            </cell>
            <cell>
                <!--  辅助功能  -->
                <sub></sub>
            </cell>
            <cell>
                <!--  常见疾病百科  -->
                <common-diseases></common-diseases>
            </cell>
            <cell>
                <!--  专家说  -->
                <experts-say></experts-say>
            </cell>
            <cell>
                <!--  便民服务  -->
                <convenience-service></convenience-service>
            </cell>
        </list>
    </div>
</template>
<style lang="sass" src="./index.scss"></style>

<script>
    import Header from './header/index.vue';
    import Main from './main/index.vue';
    import Sub from './sub/index.vue';
    import CommonDiseases from './commonDiseases/index.vue';
    import ExpertsSay from './expertsSay/index.vue';
    import ConvenienceService from './convenienceService/index.vue';

    import { mapActions, mapGetters } from 'vuex';

    var globalEvent = weex.requireModule('globalEvent');

    module.exports = {
        components: {
            'layoutHeader': Header,
            'main': Main,
            'sub': Sub,
            'common-diseases': CommonDiseases,
            'experts-say': ExpertsSay,
            'convenience-service': ConvenienceService
        },
        bmRouter: {
            viewWillBackAppear(params){
                if(params.type === 'toLogin'){
                    this.$BM_modal.alert({
                        message: params.msg,
                        okTitle: '确定'
                    }).then(() => {
                        this.$BM_router.toLogin();
                    })
                }
            }
        }
    }
</script>
