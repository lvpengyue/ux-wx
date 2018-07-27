<template>
    <div class="perfect-information">
        <div class="perfect-title">
            <span class="title-one">1</span>选择性别
            <span class="title-two">2</span>选择学校
        </div>
        <div class="perfect-head">
            <img src="./assets/male-checked.png"
                 alt=""
                 v-if="choosedHead === 1">
            <img src="./assets/male.png"
                 alt=""
                 v-else
                 @click="chooseSex(1)">
            <img src="./assets/female-checked.png"
                 alt=""
                 class="female-head"
                 v-if="choosedHead === 2">
            <img src="./assets/female.png"
                 alt=""
                 class="female-head"
                 v-else
                 @click="chooseSex(2)">
        </div>

        <img src="./assets/choose.png"
             alt=""
             v-show="choosedHead"
             class="choose-img"
             :class="{choose_female: choosedHead === 2}">
        <div class="school-list"
             v-show="choosedHead">
            <div v-for="n in 8"
                 @click="chooseSchool(n)"
                 :class="{choosed_school: choosedSchool === n}">
                <p>厦门理工大学</p>
            </div>
        </div>
        <van-popup v-model="show"
                   position="center"
                   :overlay="true">
            <div class="school-name">
                厦门大学
            </div>
            <div class="floor-wrap">
                <div class="floor-name">
                    <p>楼号</p>
                </div>
                <div class="floor-list">
                    <p v-for="n in 9"
                       @click="chooseFloor(n)"
                       :class="{choosed_floor: choosedFloor === n}">
                        凌云3#
                        <img src="./assets/choosed-floor.png"
                             v-show="choosedFloor === n">
                    </p>
                </div>
            </div>
            <van-cell-group>
                <van-field v-model="room"
                           type="number"
                           label="宿舍号"
                           placeholder="请输入宿舍号"
                           required />
            </van-cell-group>
            <div class="confirm" @click="confirmFloor()">确认</div>
        </van-popup>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
