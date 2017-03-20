<template>
    <div class="box gap">
        <div class="wrap-list">
            <div class="list-service" @click='goToUnpaidList'>
                <div class="img">
                    <image class="img-01" src="//img.benmu-health.com/app-benmu-health/01-mzjf.png"></image>
                </div>
                <text class="txt-service">门诊缴费</text>
            </div>
            <div class="list-service" @click='goToReportQuery'>
                <div class="img">
                    <image class="img-02" src="//img.benmu-health.com/app-benmu-health/02-bgcx.png"></image>
                </div>
                <text class="txt-service">报告查询</text>
            </div>
            <div class="list-service" @click="goToRecharge">
                <div class="img">
                    <image class="img-03" src="//img.benmu-health.com/app-benmu-health/03-zhcz.png"></image>
                </div>
                <text class="txt-service">账户充值</text>
            </div>
            <div class="list-service">
                <div class="img">
                    <!-- <image class="img-04" src="//img.benmu-health.com/app-benmu-health/04-jcyy.png"></image> -->
                    <image class="img-04" src="//img.benmu-health.com/app-benmu-health/dis-temp.png"></image>
                </div>
                <text class="txt-service disabled">检查预约</text>
            </div>
        </div>
    </div>
</template>
<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>
