<template>
    <div class="address-list">
        <div class="address-top">
            <p>区域</p>
            <p>楼层</p>
        </div>
        <div class="list-content">
            <ul class="area-list">
                <li v-for="item in addressList"
                    @click="chooseArea(item)"
                    :class="{choosed: item.areaname === choosedArea.areaname}">{{ item.areaname}}</li>
            </ul>
            <ul class="floor-list">
                <li v-for="item in choosedArea.floorList">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
