<template>
    <div class="shop-detail" v-if="shopDetail">
        <img :src="shopDetail.data.mallProduct.image"
             alt=""
             class="big-img">
        <div class="desc">
            {{shopDetail.data.mallProduct.name}}
            <p class="price-now">￥{{shopDetail.data.mallProduct.groupPrice / 100}}</p>
            <div class="price-old">
                <p>价格：<span>￥{{shopDetail.data.mallProduct.oriPrice / 100}}</span></p>
                <p>购买件数：1</p>
            </div>
            <div class="shop-label">
                <p>
                    自营品牌,悠洗定制
                </p>
                <p>
                    迅捷配送,便利自提
                </p>
            </div>
        </div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="shop-detail">产品详情</mt-tab-item>
            <mt-tab-item id="buy-know">购买须知</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="shop-detail">
                <div v-html="shopDetail.data.mallProduct.appHtml">
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="buy-know">
                <div v-html="shopDetail.data.mallProduct.extDesc1">
                </div>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
