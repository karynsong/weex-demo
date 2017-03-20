<template>
    <div class="box gap mb0">
        <div class="title-box">
            <text class="title">便民服务</text>
        </div>
        <div class="wrap-list">
            <div class="list-service" @click="goToTransfer">
                <text class="ff-icon ff-sqtrans">&#xe692;</text>
                <text class="txt-service">转诊社区</text>
            </div>
            <div class="list-service" @click='goToVaccination'>
                <text class="ff-icon ff-vaccinate">&#xe695;</text>
                <text class="txt-service">疫苗接种</text>
            </div>
            <div class="list-service" @click='goToPriceSearch'>
                <text class="ff-icon ff-price-query">&#xe68f;</text>
                <text class="txt-service">药价查询</text>
            </div>
            <div class="list-service" @click='goToOrderFood'>
                <text class="ff-icon ff-hos-reservation">&#xe690;</text>

                <text class="txt-service">住院订餐</text>
            </div>
            <div class="list-service" @click="goToReportInterpretation">
                <text class="ff-icon ff-report">&#xe687;</text>
                <text class="txt-service">报告解读</text>
            </div>
            <div class="list-service" @click="goToAppointmentExamination">
                <text class="ff-icon ff-test">&#xe68d;</text>
                <text class="txt-service">体检预约</text>
            </div>
            <div class="list-service" @click='goToNursingService'>
                <text class="ff-icon ff-report">&#xe694;</text>
                <text class="txt-service">护理服务</text>
            </div>
            <div class="list-service" @click='goToComplaintProposal'>
                <text class="ff-icon ff-suggestions">&#xe68e;</text>
                <text class="txt-service">投诉建议</text>
            </div>
        </div>
    </div>
</template>

<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>
