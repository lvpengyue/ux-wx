import wx from 'weixin-js-sdk';
import homeUsingBox from '../../widgets/home-using-box';
import personCenter from '../../widgets/person-center';
import { mapGetters, mapActions } from 'vuex';



export default {
    components: {
        homeUsingBox,
        personCenter
    },
    beforeRouteEnter(to, from, next) {
        next(async (vm) => {
            // 先从url上获取rsaStr
            // await vm.$groupSetRsa3(to.params.rsa); // 开发时关闭,测试上线开启

            await vm.homeGetWxconfig();

            wx.config({
                debug: true,
                appId: vm.homeWxconfig.data.appId,
                timestamp: vm.homeWxconfig.data.timestamp,
                nonceStr: vm.homeWxconfig.data.nonceStr,
                signatrue: vm.homeWxconfig.data.signatrue,
                jsApiList: [
                    'getLocation'
                ]
            });
            wx.ready(() => {
                wx.getLocation({
                    type: 'wgs84',
                    success(res) {
                        const latitude = res.latitude; // 纬度
                        const longitude = res.longitude; // 经度
                        const speed = res.speed; // 速度，以 米/每秒 计
                        const accuracy = res.accuracy; // 位置精度

                        alert(accuracy);
                    }
                });
            });
            await vm.homeGetDetail({
                rsaStr: vm.$groupRsa3
            });

            if (vm.homeDetail.data.popAd.length > 0) {
                vm.popAd = true; // 如果弹窗广告有的话
            }

            if (!vm.homeDetail.data.needAuth) {
                vm.handleCompleteInfo();
            }

            const userId = vm.homeDetail.data.userId ? vm.homeDetail.data.userId : 0;

            await vm.homeGetConfig({
                userId
            });

            if (vm.homeConfig && vm.homeConfig.data && vm.homeConfig.data.user) {
                await vm.$groupSetUser3(vm.homeConfig.data.user);
            }

            if (vm.homeConfig && vm.homeConfig.data && vm.homeConfig.data.userAccount) {
                await vm.$groupSetUserAccount3(vm.homeConfig.data.userAccount);
            }
        });
    },
    mounted() {
        document.title = '首页';
    },
    data() {
        return {
            wx,
            hasList: true, // 是否显示列表
            scanShow: true,
            loginIn: true, // 是否登陆的标识
            showPerson: false, // 是否显示个人中心
            popAd: false // 是否显示弹窗广告
        };
    },
    computed: {
        ...mapGetters([
            'homeDetail',
            'homeConfig',
            'homeWxconfig',
            'homeUserCenter',
            '$groupUser3',
            '$groupUserAccount3',
            '$groupRsa3'
        ])
    },
    methods: {
        ...mapActions([
            'homeGetDetail',
            'homeGetConfig',
            'homeGetWxconfig',
            'homeGetUserCenter',
            '$groupSetUser3',
            '$groupSetUserAccount3',
            '$groupSetRsa3'
        ]),

        /**
         * 控制完善用户信息的弹框使用
         *
         */
        handleCompleteInfo() {
            this.$dialog.setDefaultOptions({
                confirmButtonText: '去看看'
            });
            this.$dialog.confirm({
                message: this.homeDetail.data.authInfo
            }).then(() => {
                // 去往完善用户页面
                this.$router.push({
                    name: 'perfect-information'
                });
            }).catch(() => {
                // on cancel
            });
        },

        /**
         * 控制扫码弹框隐藏与否
         *
         */
        handleScanShow() {
            this.scanShow = !this.scanShow;
        },

        /**
         * 点击手动输入编码跳往输入编码页面
         *
         */
        handleInput() {
            this.$router.push({
                name: 'hand-input'
            });
        },

        /**
         * 跳转页面的方法
         *
         * @param {String} name 跳转的页面名称
         */
        redirect(name) {
            this.$router.push({
                name
            });
        },

        /**
         * 点击图片跳转的方法
         *
         * @param {String} name 跳转的url
         */
        reLocation(name) {
            window.location.href = name;
        },

        /**
         * 控制个人中心侧边栏的弹出
         *
         */
        async handleShowPerson() {
            await this.homeGetUserCenter({
                userId: this.$groupUser3.id,
                token: this.$groupUser3.sysToken
            });
            this.showPerson = !this.showPerson;

            // this.$router.push({
            //     name: 'person-center'
            // });
        },

        handleMachine() {
            this.$router.push({
                name: 'machine-list'
            });
        }
    }
};
