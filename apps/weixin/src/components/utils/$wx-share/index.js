import wx from 'weixin-js-sdk';



export default {
    wxReady(configInfo) {
        wx.config({
            debug: false,
            appId: configInfo.appId,
            timestamp: configInfo.timestamp,
            nonceStr: configInfo.nonceStr,
            signature: configInfo.signature,
            jsApiList: [
                'showOptionMenu',
                'showMenuItems',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'onMenuShareQZone'
            ]
        });
    },

    wxShare(info, vmObj) {
        // wx.showOptionMenu();
        wx.ready(() => {
            wx.onMenuShareTimeline({
                title: info.friendTitle,
                link: info.shareURL,
                imgUrl: info.pic,
                success: () => {
                    alert('已成功分享到朋友圈');
                    if (vmObj) {
                        vmObj.shareVisible = false;
                    }
                },
                cancel: () => {
                    alert('已取消分享');
                }
            });
            wx.onMenuShareAppMessage({
                title: info.title, // 分享标题
                desc: info.content, // 分享描述
                link: info.shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: info.pic, // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: () => {
                    // 用户确认分享后执行的回调函数
                    alert('分享成功');
                    if (vmObj) {
                        vmObj.shareVisible = false;
                    }
                },
                cancel: () => {
                    // 用户取消分享后执行的回调函数
                    alert('已取消分享');
                }
            });

            wx.onMenuShareQQ({
                title: info.title, // 分享标题
                desc: info.content, // 分享描述
                link: info.shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: info.pic, // 分享图标
                success: () => {
                    // 用户确认分享后执行的回调函数
                    alert('分享成功');
                    if (vmObj) {
                        vmObj.shareVisible = false;
                    }
                },
                cancel: () => {
                    // 用户取消分享后执行的回调函数
                    alert('已取消分享');
                }
            });

            wx.onMenuShareWeibo({
                title: info.title, // 分享标题
                desc: info.content, // 分享描述
                link: info.shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: info.pic, // 分享图标
                success: () => {
                    // 用户确认分享后执行的回调函数
                    alert('分享成功');
                    if (vmObj) {
                        vmObj.shareVisible = false;
                    }
                },
                cancel: () => {
                    // 用户取消分享后执行的回调函数
                    alert('已取消分享');
                }
            });

            wx.onMenuShareQZone({
                title: info.title, // 分享标题
                desc: info.content, // 分享描述
                link: info.shareURL, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: info.pic, // 分享图标
                success: () => {
                    // 用户确认分享后执行的回调函数
                    alert('分享成功');
                    if (vmObj) {
                        vmObj.shareVisible = false;
                    }
                },
                cancel: () => {
                    // 用户取消分享后执行的回调函数
                    alert('已取消分享');
                }
            });
        });
    }
};
