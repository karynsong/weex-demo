<template>
    <div class="wrapper">
        <list class='list-one-line'>
            <cell class="hos-item" @click="goToDept(item)" v-for="item in hosList">
                <div class="hos-one-inner">
                    <image class="hos-item-img" :src="item.smallLogo"></image>
                    <div class="hos-one-right">
                        <text class="hos-item-text">{{item.hosName}}</text>
                        <div class="hos-item-status">
                            <text class="ff-icon ff-hos-icon">&#xe610;</text>
                            <text class="text">{{item.hosLevel}}</text>
                            <text class="ff-icon ff-hos-icon">&#xe619;</text>
                            <text class="text">{{item.countyName}}</text>
                        </div>
                    </div>
                    <text class="ff-icon ff-arrow">&#xe697;</text>
                </div>
                <text class="no-open" v-if="!item.open">{{ item.openView }}</text>
            </cell>
        </list>
    </div>
</template>
<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>