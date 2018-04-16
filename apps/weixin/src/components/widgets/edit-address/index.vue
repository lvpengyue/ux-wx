<template>
    <div class="address-picker"
         v-if="editVisible">
        <div class="edit-wrap">
            <div class="close">
                <img src="./assets/hide@2x.png"
                     alt=""
                     @click="handleHide()">
            </div>
            <mt-header title="编辑收货地址"></mt-header>
            <mt-field label="收货人"
                      placeholder=""
                      type="text"
                      v-model="location.username"></mt-field>
            <mt-field label="联系电话"
                      placeholder=""
                      type="tel"
                      v-model="location.phone"></mt-field>
            <!-- <div @click="showSelect()">
                <mt-field label="省市区"
                      type="text"
                      @focus="showSelect();"
                      v-model="selectAddress">
                </mt-field>
            </div> -->
            <mt-field label="省市区"
                      type="text"
                      :readonly="true"
                      v-model="selectAddress">
            </mt-field>

            <mt-field placeholder="详细地址（如街道，小区，乡镇，村）"
                      type="textarea"
                      rows="2"
                      v-model="location.streetAddress"></mt-field>

            <div class="btn-wrap">
                <button class="btn" @click="handleAdd()">提交</button>
            </div>
        </div>
        <div class="pick-mark"
             v-show="addressFlag">
            <div class="btn-box">
                <a class="btn-cancel"
                   @click="addressFlag = !addressFlag">取消</a>
                <a class="btn-sure"
                   @click="onFillAddress">确定</a>
            </div>
            <mt-picker class="select"
                       :slots="slots"
                       value-key="aname"
                       @change="onValuesChange"></mt-picker>
        </div>
    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index.scss"></style>
