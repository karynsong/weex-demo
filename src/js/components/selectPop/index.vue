<template>
    <!-- <div class="mask"> -->
        <div class="dialog-wrap">
            <div class="dialog-header">
                <text class="cancle"></text>
                <text class="select-area">{{title}}</text>
                <text class="done" @click='cancel'>{{btnName}}</text>
            </div>
            <list class="list-area">
                <slot></slot>
            </list>
        </div>
    <!-- </div> -->
</template>

<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>