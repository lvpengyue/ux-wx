<template>
    <div class="machine-list">
        <div v-for="n in 15"
             @click="toModePay(n)"
             :class="{use: n < 4, using: (n >= 4 && n < 6), nouse: n >= 6, machine: true}">
            <img src="./assets/use.png"
                 v-if="n < 6"
                 alt="">
            <img src="./assets/no-use.png"
                 v-if="n >= 6"
                 alt="">
            <p class="machine-code">F18201</p>
            <p class="address-code">301</p>
            <p class="machine-status" v-if="n < 4">空闲</p>
            <p class="machine-status" v-if="n >= 4 && n < 6">00:30:00</p>
            <p class="machine-status" v-if="n >= 6">不可用</p>
        </div>
        <div class="relocation" @click="toAddressList()">
            重新定位地址
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
