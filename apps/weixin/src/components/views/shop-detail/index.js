import { mapActions, mapGetters } from 'vuex';

export default {
    beforeRouteEnter(to, from, next) {
        document.title = '商品详情';
        next(async (vm) => {
            const id = to.params.id;

            vm.$indicator.open();
            await vm.shopGetDetail({
                id,
                token: vm.$groupUserData.sysToken,
                userId: vm.$groupUserData.id
            });

            vm.$indicator.close();
        });
    },
    data() {
        return {
            selected: 'shop-detail'
        };
    },

    methods: {
        ...mapActions([
            'shopGetDetail'
        ]),
        handleBack() {
            this.$router.back();
        }
    },

    computed: {
        ...mapGetters([
            'shopDetail',
            '$groupUserData',
            'pinDetail'
        ])
    }
};
