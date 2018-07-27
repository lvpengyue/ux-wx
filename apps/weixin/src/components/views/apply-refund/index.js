import { mapGetters, mapActions } from 'vuex';
import md5 from 'js-md5';

export default {
    async mounted() {
        document.title = '申请退款';

        // 后期userId和token通过url获取到
        const userId = this.$route.params.userId;
        const token = this.$route.params.token;

        await this.$groupSetSourceParams3({
            userId,
            token,
            apiSign: md5(`${userId} & ${token}`)
        });
    },

    data() {
        return {
            refundReason: ''
        };
    },

    computed: {
        ...mapGetters([
            'applyRefundData'
        ])
    },

    methods: {
        ...mapActions([
            'applyRefundGetData',
            '$groupSetSourceParams3'
        ]),

        async handleSubmit() {
            const u = navigator.userAgent;
            const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
            const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

            if (!this.refundReason.trim()) {
                this.$toast('申请内容不能为空');
            } else {
                await this.applyRefundGetData({
                    orderId: this.$route.params.orderId,
                    refundReason: this.refundReason
                });

                if (this.applyRefundData.code === 0) {
                    this.$toast(this.applyRefundData.info);
                } else {
                    if (isAndroid) {
                        window.android.orderRefundSuccess();
                    } else if (isIOS) {
                    // 进行ios处理
                        // JKEventHandler.webBackToApp();
                        JKEventHandler.callNativeFunction('orderRefundSuccess', null, null, null);
                    }
                    this.$dialog.setDefaultOptions({
                        confirmButtonText: '确定'
                    });
                    this.$dialog.alert({
                        message: this.applyRefundData.info
                    }).then(() => {
                        if (isAndroid) {
                            window.android.webBackToApp();
                        } else if (isIOS) {
                        // 进行ios处理
                            // JKEventHandler.webBackToApp();
                            JKEventHandler.callNativeFunction('webBackToApp', null, null, null);
                        }
                    });
                }
            }
        }
    }
};
