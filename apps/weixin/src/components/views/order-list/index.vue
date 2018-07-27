<template>
    <div class="order-list">
        <div v-for="n in 2"
             class="order-each">
            <div class="order-title">
                <p class="time">2017-07-01 12:12:13</p>
                <p class="status error">异常</p>
            </div>
            <div class="order-content">
                <ul>
                    <li class="order-num">订单号：2323232323</li>
                    <li class="order-mode">模式：标准+脱水</li>
                    <li class="order-address">地点：A1FF-03</li>
                </ul>
            </div>
            <div class="order-foot">
                <p>合计： ￥
                    <span class="order-money">4.00</span> 积分：
                    <span class="bonus-points">0</span>分</p>
                <button>申请退款</button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
