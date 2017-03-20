<template>
    <div class="box gap" v-if="EXPERTSSAY_list.length">
        <text class="title">专家谈</text>
        <slider-point :num="EXPERTSSAY_list.length">
            <div class="slide-panel" v-for="item in EXPERTSSAY_list" @click="openArticle(item)">
                <image class="slide-img" resize="cover" :src="'https://lev-inf.benmu-health.com/resource/image/' +　item.bannerResourceId + '.jpg'"></image>
            </div>
        </slider-point>
    </div>
</template>

<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>
