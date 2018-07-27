export default {
    beforeRouteEnter(to, from, next) {
        next();
    },
    data() {
        return {
            choosedHead: 0,
            choosedSchool: 0,
            choosedFloor: 0, // 选择的学校
            room: '', // 宿舍号
            show: false // 控制弹窗
        };
    },
    mounted() {
        document.title = '完善信息';
    },
    methods: {
        /**
         * 选中男女头像
         *
         * @param {Number} sex 1男2女
         */
        chooseSex(sex) {
            this.choosedHead = sex;
        },

        chooseSchool(num) {
            this.choosedSchool = num;
            this.show = true;
        },

        chooseFloor(num) {
            this.choosedFloor = num;
        },

        confirmFloor() {
            this.show = false;
        }
    }
};
