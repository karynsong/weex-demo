<template>
    <div class="info-reminder" @click="goToMessage">
        <text class="ff-icon" :class="[bellsClass]">&#xe68b;</text>
        <!-- 无消息提示时，添加  类-->
        <div class="unread-message" v-if="messageLength">
            <text class="unread-num">{{ messageLength > 9 ? 9 : messageLength }}</text>
            <text class="more-unread" v-if="messageLength > 9">+</text>
        </div>
    </div>
</template>

<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>
