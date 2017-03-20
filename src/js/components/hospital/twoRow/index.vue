<template>
    <div class="wrapper">
        <list>
            <cell class="hos-two" v-for="items in hosList">
                <div v-for="item in items" :class="[ item.isMock ? 'odd-bg' : '' ]" @click="goToDept(item)" class="hos-two-rows">
                    <image class="hos-two-img" :src="item.smallLogo"></image>
                    <text class="hos-two-text">{{item.hosName}}</text>
                    <text class="no-open" v-if="!item.open && !item.isMock">{{ item.openView }}</text>
                </div>
            </cell>
        </list>
    </div>
</template>
<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>