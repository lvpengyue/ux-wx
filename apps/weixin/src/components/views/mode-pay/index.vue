<template>
    <div class="mode-pay">
        <div class="machine-detail">
            <img src="./assets/use.png"
                 alt="">
            <p class="machine-code">设备号-F1825</p>
            <p :class="{canuse: keywash, nouse: !keywash, keywash: true}">一键清洁</p>
            <p class="back-time">倒计时 07:34:33</p>
            <hr>
            <p class="address">详细地址-2308</p>
            <p class="status">空闲</p>
        </div>
        <p class="select-mode">选择洗衣模式</p>
        <div class="mode-list">
            <ul>
                <li @click="selectMode(item.value)"
                    v-for="item in modeList"
                    :class="{selected: selectedMode === item.value}">
                    <div class="mode-name">
                        <p class="type-name">{{ item.name }}<img src="./assets/red-bag.png" v-show="showRedBag"></p>
                        <p class="type-detail">{{ item.detail }}</p>
                    </div>
                    <p class="mode-value">￥{{ item.value }}.00</p>
                </li>
            </ul>
            <div class="mode-coupons">
                <p class="coupons-name">优惠券</p>
                <div class="coupons-num" @click="ToMyCoupons()">
                    <p>1个可用</p>
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>
        <div class="mode-button" :class="{bagPay: bagMoney >= selectedMode && selectedMode, otherPay: bagMoney < selectedMode && selectedMode}">
            <p v-if = "bagMoney >= selectedMode && selectedMode" @click="toBagPay()">
                余额支付（剩余{{ bagMoney }}.00）
            </p>
            <p v-else-if = "bagMoney < selectedMode && selectedMode" @click="toOtherPay()">
                使用其他方式支付
            </p>
            <p v-else @click="toMachineList();">
                选择其他洗衣机
            </p>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
