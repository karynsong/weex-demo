<!--
@Author: songqi
@Date:   2017-01-09
@Last modified by:   songqi
@Last modified time: 2017-03-20
-->

这是一个 weex 项目的 demo，依赖 BMFE_scaffold 作为脚手架，可以完成启动服务，发布打包等等功能。

## 前置依赖

### 脚手架依赖

    sudo npm install -g BMFE_scaffold

### bsdiff 生成 zip 包

    网上查一下 bsdiff 安装，本地安装很快，开发机编译安装也只用了不到五分钟

## node_module 依赖

    cd demo && npm install

## 启动服务

    // 启动一个服务，此时可以访问到一个 bundle.js
    sudo BM server

## 模拟线上打包

    // 模拟打包机打包，如果需要生成 diff 包，需要配置本地文件夹 'zipFolder': '/home/app'
    sudo BM minWeex
