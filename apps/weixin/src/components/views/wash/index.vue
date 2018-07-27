<template>
    <div class="wash">
        <div class="wash-wrap wash-start" v-show="!runCircle">
            <p class="start-wash" v-show="!runCircle" @click="startWash()">启动洗衣机</p>
        </div>
        <div class="wash-wrap wash-circle" v-show="runCircle">
            <div class="inner-circle">
                <div class="rotate circle1"></div>
                <div class="rotate circle2"></div>
            </div>
            <img src="./assets/circle.png" alt="" :class="{wash_img: runCircle}">
            <p class="wash-percent">28<span>%</span></p>
        </div>
        <p class="end-time-name">剩余时间</p>
        <p class="end-time-value">00:01:07</p>
        <p class="address-code-name">地址/宿舍</p>
        <p class="address-code-value">2545</p>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
