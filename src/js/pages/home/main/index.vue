<template>
    <div class="box gap">
        <div class="block register" @click="openRegister">
            <div class="wrap-reg limit-width">
                <text class="tit" changeFont="false">挂号</text>
                <text class="tit-sec" changeFont="false">北京22家三甲医院号源</text>
            </div>
            <image class="img img-01" src="//img.benmu-health.com/app-benmu-health/gh-01.png"></image>
        </div>
        <div class="block outpatient" @click="openSpecialDisease">
            <div class="wrap-reg">
                <text class="tit" changeFont="false">专病专症门诊</text>
                <text class="tit-sec" changeFont="false">对应病症挂号</text>
            </div>
            <image class="img img-02" src="//img.benmu-health.com/app-benmu-health/jzk-02.png"></image>
        </div>
        <div class="block health-self disabled-bg" @click="openSelfExamination">
            <div class="wrap-reg">
                <text class="tit disabled" changeFont="false">健康自查</text>
                <text class="tit-sec disabled" changeFont="false">自查症状推荐号源</text>
            </div>
            <!-- <image class="img img-03" src="//img.benmu-health.com/app-benmu-health/jkzc-03.png"></image> -->
            <image class="img img-03" src="//img.benmu-health.com/app-benmu-health/disabled-img-temp.png"></image>
        </div>
        <div class="block proficient" @click="goTospecialist">
            <div class="wrap-reg">
                <text class="tit" changeFont="false">知名专家团队</text>
                <text class="tit-sec" changeFont="false">团队号源直接挂</text>
            </div>
            <image class="img img-04" src="//img.benmu-health.com/app-benmu-health/zmtd-04.png"></image>
        </div>
    </div>
</template>

<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>
