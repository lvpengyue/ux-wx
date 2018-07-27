import { mapActions, mapGetters } from 'vuex';
import EXIF from 'exif-js';
import $ from 'jquery';



export default {
    async mounted() {
        document.title = '故障报修';

        await this.failReportingGetId();
        if (!this.failReportingId) {
            this.canInput = false;
        } else {
            this.params.washerId = this.failReportingId.id;
            this.params.washerName = this.failReportingId.name;
        }
    },
    computed: {
        ...mapGetters([
            'failReportingData',
            'failReportingId',
            'failReportingUpload',
            '$groupSourceParams3'
        ])
    },
    data() {
        return {
            list: [
                '付款未成功',
                '付款后无法启动',
                '桶内积水',
                '洗不干净',
                '其他'
            ],

            canInput: true, // 不能填

            params: {
                remarks: '',
                washerId: 0,
                washerName: '',
                type: '',
                pics: ''
            },

            type: [],
            imgList: [], // 临时存储的图片列表
            imgSaveList: [] // 提交的图片列表（只有图片名称）
        };
    },
    methods: {
        ...mapActions([
            'failReportingGetData',
            'failReportingGetId',
            'failReportingGetUpload'
        ]),

        scrollTop() {
            setTimeout(() => {
                document.getElementById('remarks').scrollIntoView(true);
            }, 500);
        },

        getPhotoOrientation(img) {
            let orient;

            EXIF.getData(img, function () {
                orient = EXIF.getTag(this, 'Orientation');
            });

            return orient;
        },

        async handleSubmit() {
            if (!this.params.washerName || this.type.length < 1) {
                this.$toast('填完善故障信息');
            } else if (this.type.indexOf('其他') != '-1' && !this.params.remarks) {
                this.$toast('请填写备注');
            } else {
                this.params.pics = this.imgSaveList.join(',');
                this.params.type = this.type.join(',');
                await this.failReportingGetData(this.params);
                if (this.failReportingData.code === 1) {
                    this.$dialog.setDefaultOptions({
                        confirmButtonText: '确定'
                    });
                    this.$dialog.alert({
                        message: this.failReportingData.info
                    }).then(() => {
                        const u = navigator.userAgent;
                        const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
                        const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端

                        if (isAndroid) {
                            window.android.webBackToApp();
                        } else if (isIOS) {
                        // 进行ios处理
                            JKEventHandler.callNativeFunction('webBackToApp', null, null, null);
                        }
                    });
                }
            }
        },

        // 上传处理
        onRead(file) {
            // 首先判断是否已上传三张
            if (this.imgList.length >= 3) {
                this.$toast('最多上传三张哦');

                return false;
            }

            this.compressPhoto(file.content, 320, 320, async (img) => {
                const arr = img.split(',');

                const base64Str = arr[1];

                // 调用上传方法
                await this.failReportingGetUpload({
                    base64Str
                });

                this.imgList.push(this.failReportingUpload.data.url);
                this.imgSaveList.push(this.failReportingUpload.data.saveName);
            });
        },

        clearImg(index) {
            this.imgList.splice(index, 1);
            this.imgSaveList.splice(index, 1);
        },

        // 压缩图片的方法
        compressPhoto(imgBase64Data, maxWidth, maxHeight, fun) {
            const img = new Image();

            // 缩放图片需要的canvas
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            const that = this;

            // base64地址图片加载完毕后
            img.onload = function () {
                const ori = that.getPhotoOrientation(img);

                // 图片原始尺寸
                const originWidth = this.width;
                const originHeight = this.height;

                // 目标尺寸
                let targetWidth = originWidth;
                let targetHeight = originHeight;

                // 图片尺寸超过400x400的限制

                if (originWidth > maxWidth || originHeight > maxHeight) {
                    if (originWidth / originHeight > maxWidth / maxHeight) {
                        // 更宽，按照宽度限定尺寸
                        targetWidth = maxWidth;
                        targetHeight = Math.round(maxWidth * (originHeight / originWidth));
                    } else {
                        targetHeight = maxHeight;
                        targetWidth = Math.round(maxHeight * (originWidth / originHeight));
                    }
                }

                // canvas对图片进行缩放
                canvas.width = targetWidth;
                canvas.height = targetHeight;

                // 清除画布
                context.clearRect(0, 0, targetWidth, targetHeight);

                if (ori && ori == 6) {
                    context.save(); // 保存状态
                    context.translate(targetWidth / 2, targetHeight / 2); // 设置画布上的(0,0)位置，也就是旋转的中心点
                    context.rotate(90 * (Math.PI / 180)); // 把画布旋转90度
                    // 执行Canvas的drawImage语句
                    context.drawImage(img, 0 - (targetHeight / 2), 0 - (targetWidth / 2), targetHeight, targetWidth);// 把图片绘制在画布translate之前的中心点，
                    context.restore();// 恢复状态
                } else {
                    // 图片压缩
                    context.drawImage(img, 0, 0, targetWidth, targetHeight);
                }

                const base = canvas.toDataURL('image/jpeg', 0.5);// canvas转码为base64

                fun(base);// 返回处理
            };

            img.src = imgBase64Data;
        }
    }
};
