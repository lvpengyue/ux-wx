export default {
    props: {
        // 父组件传过来的用户信息
        userData: {
            default: ''
        }
    },
    data() {
        return {
            loginIn: true
        };
    },
    methods: {
        toLink(name) {
            this.$router.push({
                name
            });
        }
    }
};
