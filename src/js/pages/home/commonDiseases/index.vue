<template>
    <div class="box gap" v-if="COMMONDISEASES_list.length">
        <div class="title-box">
            <text class="title">常见疾病百科</text>
        </div>
        <div class="panel-list-illness">
            <text class="illness-txt" v-for="item in COMMONDISEASES_list" @click="goToCommonDiseases(item)">{{ item.diseaseName }}</text>
        </div>
    </div>
</template>

<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>
