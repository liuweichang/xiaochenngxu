//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    test:{    
      name:'lwc',
      sex:'man',
    }

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onPullDownRefresh:function() {
    console.log('刷新')
    var _this = this;
    setTimeout(function(){
      wx.stopPullDownRefresh({
        success:res=>{
          console.log(this+'this')
          console.log(_this)
          console.log('停止刷新')
          _this.setData({
            'test.age':'22'
          })
        }
      })      
    },5000)
  },

    /***
    setTimeout(function(){
      wx.stopPullDownRefresh({
        success:res=>{
          console.log(res)
          console.log('停止刷新')
        }
      })
    },10)
    ***/

  onLoad: function () {
    console.log('aaa')
    console.log('lwcc')
    wx.getUserInfo({
      success:res=>{
        console.log(res)
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: app.globalData.userInfo,
          hasUserInfo: true
        })
      }
    })
},
onReady:function() {
  console.log('页面准备好')  
}

    
})
/***
  getUserInfo: function(e) {
    console.log(e)
    console.log('nihao')
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: app.globalData.userInfo,
      hasUserInfo: true
    })
  },***/
