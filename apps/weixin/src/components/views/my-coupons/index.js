export default {
    data() {
        return {
            hasList: true,
            scanShow: true,
            checkedNum: ''
        };
    },
    methods: {
        checked(num) {
            this.checkedNum = num;
        }
    }
};
