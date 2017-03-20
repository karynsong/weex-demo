/**
* @Author: songqi
* @Date:   2017-02-24
* @Last modified by:   songqi
* @Last modified time: 2017-03-10
*/

import _isEmpty from 'lodash/isEmpty';

export default {
    data(){
        return {
            // messageBroadcast: {},
            messageLength: 0
        }
    },
    props: ['bellsClass'],
    methods: {
        goToMessage(){
            this.$BM_router.open({
                page: 'message_lists',
                authorize: true
            })
        },
        postMessage(){
            setTimeout(() => {
                this.messageBroadcast.postMessage({
                    type: 'get'
                });
            }, 3000);
        },
        getMessage(){
            if(weex.config.bundleUrl.indexOf('js/pages/account/home/index.js') !== -1){
                return;
            };
            // if(_isEmpty(this.messageBroadcast)){
            //     this.messageBroadcast = new BroadcastChannel('message');
            //     this.messageBroadcast.onmessage = (event) => {
            //         if(event.data.type === 'messageCount'){
            //             this.messageLength = event.data.unreadCount;
            //         }
            //     }
            // }
            // this.postMessage();
        }
    },
    bmRouter: {
        viewWillBackAppear(params){
            this.getMessage();
        }
    },
    bmGlobalEvent: {
        pushMessage(message){
            this.getMessage();
        },
        appActive(){
            this.getMessage();
        }
    },
    mounted(){
        this.getMessage();
    }
}
