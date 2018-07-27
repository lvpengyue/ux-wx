export default {
    data() {
        return {
            keywash: true,
            bagMoney: 3,
            selectedMode: 0,
            showRedBag: true, // 是否显示红包图标
            modeList: [
                {
                    name: '单脱洗',
                    detail: '就是脱水啦啦啦啦',
                    value: 1
                },
                {
                    name: '快速洗',
                    detail: '就是快洗啦啦啦啦',
                    value: 2
                },
                {
                    name: '标准洗',
                    detail: '就是标准洗啦啦啦啦',
                    value: 3
                },
                {
                    name: '强力洗',
                    detail: '就是强力洗啦啦啦啦',
                    value: 4
                }
            ]
        };
    },
    methods: {
        /**
         * 选择洗衣模式的操作
         * @param {Number} num 选择的模式金额
         */
        selectMode(num) {
            this.selectedMode = num;
        },

        /**
         *去往我的优惠券
        */
        ToMyCoupons() {
            this.$router.push({
                name: 'my-coupons'
            });
        },

        /**
         * 我的钱包支付
        */
        toBagPay() {
            // this.$toast.fail({
            //     message: '支付失败,请重新支付',
            //     duration: 1000
            // });
            this.$router.push({
                name: 'wash'
            });
        },

        toOtherPay() {
            alert('去其他支付方式页面');
        },

        toMachineList() {
            this.$router.push({
                name: 'machine-list'
            });
        }
    },
    mounted() {
        document.title = '模式支付';
    }
};
