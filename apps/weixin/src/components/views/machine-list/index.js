export default {
    data() {
        return {
            hasList: true,
            scanShow: true
        };
    },
    mounted() {
        document.title = '洗衣机列表';
    },
    methods: {
        toModePay(num) {
            this.$router.push({
                name: 'mode-pay'
            });
        },

        toAddressList() {
            this.$router.push({
                name: 'address-list'
            });
        }
    }
};
