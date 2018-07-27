export default {
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            vm.$toast.success({
                message: '支付成功',
                duration: 1500
            });
        });
    },
    data() {
        return {
            runCircle: false
        };
    },
    methods: {
        startWash() {
            this.runCircle = true;
        }
    }
};
