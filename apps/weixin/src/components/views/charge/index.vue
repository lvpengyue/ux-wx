<template>
    <div class="charge">
        <p class="charge-title">账户余额(元)</p>
        <p class="charge-value">234</p>
        <p class="charge-money">充值金额</p>
        <div class="charge-list">
            <div v-for="n in 4"
                 class="charge-each"
                 :class="{fire: n === checked}"
                 @click="checkCharge(n)">
                充100送{{n}}
            </div>
        </div>
        <button class="to-charge">立即充值</button>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
