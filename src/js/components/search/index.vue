<template>
    <div>
        <!-- search -->
        <div class="wrap-panel">
            <div class="wrap-search">
                <text class="ff-icon ff-search-new">&#xe628;</text>
                <input class="input-search" ref="search" type="text" v-model="text" @return="goReturn($event.value)" returnKeyType="search" placeholder="搜索医院、科室、知名专家团队"/>
                <text class="ff-icon ff-del" v-if="text && focus" @click="text=''">&#xe620;</text>
            </div>
            <text class="cancel-bar" @click="back">取消</text>
        </div>
        <!-- search end-->
    </div>
</template>

<style lang="sass" src="./index.scss"></style>

<script src="./index.js"></script>
