export default {
    props: {
        data: {
            type: Object,
            required: true
        },

        // 父组件传入是否显示我的标签
        showMyTip: {
            type: Boolean,
            required: true,
            default: false
        }
    },
    data() {
        return {};
    }
};
