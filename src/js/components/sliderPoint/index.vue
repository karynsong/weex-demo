<template>
    <div class="wrap-pannel">
        <slider class="slide-box" interval="3000" auto-play="true" @change="silderChange">
            <slot></slot>
        </slider>
        <!--<div class="wrap-point">-->
            <div class="slide-point" v-if="num > 1">
                <text class="point" v-for="item in num" :class="[index === item ? 'current' : '']"></text>
            </div>
        <!--</div>-->
    </div>
</template>

<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>
