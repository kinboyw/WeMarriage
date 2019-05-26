// app.js
App({
    onLaunch: function () {
        //var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            // wx.login({
            //     success: function () {
            //         wx.getUserInfo({
            //             success: function (res) {
            //                 //console.info(res);
            //                 that.globalData.userInfo = res.userInfo;
            //                 typeof cb == "function" && cb(that.globalData.userInfo)
            //             }
            //         })
            //     }
            // });
        }

    },
    onHide: function () {
        wx.pauseBackgroundAudio();
    },
    onShow: function () {
        wx.playBackgroundAudio()
    },
    globalData: {
      userInfo: null,
      appid: 'wx0d437ad12e46ca92',//此处改成您自己的小程序appid
      //appid:'wxade372ce7f2da061',
      //server: 'https://wx.qiaker.cn/api',
      server:'https://wx.kinboy.wang/api',
      music_url: ''
    }
    
});

