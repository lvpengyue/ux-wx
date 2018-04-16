<template>
    <div class="pay">
        <div class="content">
            <p class="price">支付金额：<span>￥{{pinDetail.data.productOrder.totalPrice / 100}}</span></p>
            <div @click.prevent="wxPay()">
                <mt-cell title="微信支付">
                    <img slot="icon" src="./assets/wx@2x.png" alt="">
                    <span><img src="./assets/shape-gray@2x.png" alt=""></span>
                </mt-cell>
            </div>
        </div>
    </div>
</template>

<style lang="css" src="./index.css"></style>
<script src="./index.js"></script>
