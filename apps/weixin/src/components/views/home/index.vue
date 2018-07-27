<template>
    <div class="home"
         v-if="homeDetail && homeDetail.data">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="item in homeDetail.data.adlist">
                <img :src="item.aliPic"
                     @click="reLocation(item.link)" />
            </van-swipe-item>
        </van-swipe>
        <div class="content"
             v-show="homeDetail.data.washerList.length">
            <div class="title">
                <p>洗衣机列表</p>
                <p @click="handleMachine();"
                   v-show="homeDetail.data.showPublicBtn">搜索附近的设备
                    <van-icon name="arrow"></van-icon>
                </p>
            </div>
            <template v-for="item in homeDetail.data.washerList">
                <home-using-box :data="item"
                                :showMyTip="Boolean($groupUser3) && ($groupUser3.id === item.washUserId)"></home-using-box>
            </template>
        </div>
        <div class="content-empty"
             v-show="!homeDetail.data.washerList.length">
            <img src="./assets/empty-data.png"
                 alt="">
            <p v-if="!homeDetail.data.userId">
                <span>登录，</span>开启悠生活~</p>
            <p v-else>扫码可直接洗衣哦</p>
        </div>
        <div :class="{bottom: true, show: scanShow}">
            <div class="top"
                 v-if="scanShow"
                 @click="handleScanShow();">
                <img src="./assets/down.png"
                     alt="">
            </div>
            <div class="top"
                 v-else
                 @click="handleScanShow();">
                <img src="./assets/up.png"
                     alt="">
            </div>
            <div class="bottom"
                 v-show="scanShow">
                <div class="scan">
                    <img src="./assets/scan.png"
                         alt="">
                    <p>扫码使用</p>

                </div>
                <div class="hand_input"
                     @click="handleInput()">
                    手动输入编码
                </div>
            </div>
        </div>
        <div class="feedback"
             @click="redirect('feedback')"
             :class="{feedbackdown: !scanShow}"></div>
        <div class="trouble"
             @click="redirect('trouble-shooting')"
             :class="{troubledown: !scanShow}"></div>
        <div class="people"
             @click="handleShowPerson()"
             :class="{peopledown: !scanShow}">
            <div class="people-inner"></div>
        </div>
        <van-popup v-model="popAd">
            <template v-if="homeDetail.data.popAd.length > 0">
                <img :src="`${homeDetail.data.popAd[0].aliPic}?x-oss-process=image/resize,m_fill,h_1300,w_900`"
                     alt=""
                     class="popad-img"
                     @click="reLocation(homeDetail.data.popAd[0].link)">
            </template>
        </van-popup>
        <van-popup v-model="showPerson"
                   class="person-popup"
                   :userData="homeUserCenter"
                   position="left"
                   overlay-class="person-over"
                   :overlay="true">
            <person-center></person-center>
        </van-popup>
    </div>
</template>

<style lang="scss" src="./index.scss"></style>
<script src="./index.js"></script>
