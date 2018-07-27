import { mapActions, mapGetters } from 'vuex';
import md5 from 'js-md5';



export default {
    async mounted() {
        document.title = '故障排查';
        _czc.push(['_trackEvent', 'fault_page', '进入故障排查页面']);

        // 后期userId和token通过url获取到
        const userId = this.$route.params.userId;
        const token = this.$route.params.token;

        await this.$groupSetSourceParams3({
            userId,
            token,
            apiSign: md5(`${userId} & ${token}`)
        });

        // const u = navigator.userAgent;
        // const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
        // const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

        // if (isAndroid) {
        //    // 无操作
        // } else if (isIOS) {
        // // 进行ios处理
        //     document.addEventListener('touchmove', this.preventDefault, false);

        //     document.body.addEventListener('touchmove', (ev) => {
        //         const target = ev.target;

        //     // 在 scroller 上滑动，阻止事件冒泡，启用浏览器默认行为。
        //         if (this.isScroller(target)) {
        //             ev.stopPropagation();
        //         }
        //     }, false);
        // }
    },
    computed: {
        ...mapGetters([
            '$groupSourceParams3'
        ])
    },
    methods: {
        ...mapActions([
            '$groupSetSourceParams3'
        ]),
        toReport() {
            _czc.push('_trackEvent', 'fault_report', '点击了故障报修按钮');
            this.$router.push({
                name: 'fail-reporting',
                params: {
                    userId: this.$groupSourceParams3.userId,
                    token: this.$groupSourceParams3.token
                }
            });
        },

        preventDefault(ev) {
            ev.preventDefault();
        },

        isScroller(el) {
            // 判断元素是否为 scroller
            return el.classList.contains('scroller');
        }



    }
};
