export default {
    beforeRouteEnter(to, from, next) {
        next();
    },
    mounted() {
        document.title = '地址列表';
    },
    data() {
        return {
            choosedArea: {
                areaname: '',
                floorList: []
            },
            addressList: [
                {
                    areaname: '北京大学1',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学2',
                    floorList: [
                        '4F',
                        '5F',
                        '6F'
                    ]
                },
                {
                    areaname: '北京大学3',
                    floorList: [
                        '7F',
                        '8F',
                        '9F'
                    ]
                },
                {
                    areaname: '北京大学4',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学5',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学6',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学7',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学8',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学9',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学10',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学11',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学12',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                },
                {
                    areaname: '北京大学13',
                    floorList: [
                        '3F',
                        '4F',
                        '5F'
                    ]
                }
            ]
        };
    },
    methods: {
        chooseArea(areaObj) {
            this.choosedArea = areaObj;
        }
    }
};
