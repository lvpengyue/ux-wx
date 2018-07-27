<template>
    <div class="my-coupons">
        <div v-for="n in 8"
             @click="checked(n)"
             :class="{normal: n%2, sale: !(n%2), coupon: true}">
            <img src="./assets/checked.png" :class="{checked_coupon: n === checkedNum}">
            <div class="coupon-detail">
                <p class="coupon-name">免费洗衣券</p>
                <p class="coupon-type">强力洗</p>
                <!-- <p class="end-time">截止到2018.0509 23.00前使用</p> -->
                <p class="end-time">有效期至 2018.06.13</p>
            </div>
            <div class="coupon-sale">
                免费
            </div>
        </div>
        <div class="no-use">
            不使用悠洗洗衣券
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
