import { mapActions, mapGetters } from 'vuex';
import md5 from 'js-md5';

export default {
    async mounted() {
        document.title = '意见反馈';
        _czc.push(['_trackEvent', 'feedback_page', '进入意见反馈页面']);


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
            list: [
                '设备故障',
                '洗衣体验',
                'APP功能建议',
                '其他'
            ],
            type: [],  // 选中的类型
            content: '',
            contact: ''
        };
    },
    computed: {
        ...mapGetters([
            'feedbackData'
        ])
    },
    methods: {
        ...mapActions([
            'feedbackGetData',
            '$groupSetSourceParams3'
        ]),
        scrollTop() {
            setTimeout(() => {
                document.getElementById('contact').scrollIntoView(true);
            }, 500);
        },
        async handleSubmit() {
            let go = true;

            if (!this.content.trim()) {
                // 反馈意见为空
                this.$toast('反馈意见忘填了吧');
                go = false;
            }
            if (!this.contact.trim()) {
                // 反馈意见为空
                this.$toast('联系方式填一下吧');
                go = false;
            }

            if (go) {
                const params = {
                    type: this.type.join(','),
                    content: this.content,
                    contact: this.contact
                };

                await this.feedbackGetData(params);

                if (this.feedbackData.code === 0) {
                    this.$toast(this.feedbackData.info);
                } else {
                    this.$dialog.setDefaultOptions({
                        confirmButtonText: '确定'
                    });
                    this.$dialog.alert({
                        message: this.feedbackData.info
                    }).then(() => {
                        const u = navigator.userAgent;
                        const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
                        const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

                        if (isAndroid) {
                            window.android.webBackToApp();
                        } else if (isIOS) {
                        // 进行ios处理
                            // JSObjectProtocol.webBackToApp();
                            JKEventHandler.callNativeFunction('webBackToApp', null, null, null);
                        }
                    });
                }
            }
        }
    }
};
