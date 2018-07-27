export default {
    data() {
        return {
            checked: 3
        };
    },
    methods: {
        checkCharge(n) {
            this.checked = n;
        }
    },
    mounted() {
        document.title = '充值';
    }
};
