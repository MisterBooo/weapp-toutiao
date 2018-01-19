//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    categoryTabs: [ { type: "top", lanmu_name:"头条"},
                    { type: "shehui", lanmu_name: "社会" },
                    { type: "guonei", lanmu_name: "国内" },
                    { type: "guoji", lanmu_name: "国际" },
                    { type: "yule", lanmu_name: "娱乐" },
                    { type: "tiyu", lanmu_name: "体育" },
                    { type: "junshi", lanmu_name: "军事" },
                    { type: "keji", lanmu_name: "科技" },
                    { type: "caijing", lanmu_name: "财经" },
                    { type: "shishang", lanmu_name: "时尚" },
                  ],
    currentTab: "top"
  },
  changeCategory:function(event){
     var type = event.target.dataset.type
     console.log(event.target.dataset.type)
     if(this.data.currentTab == event.target.dataset.type){
       return false
     }
     this.setData({currentTab:type})
  },
  


  //事件处理函数
  bindViewTap: function() {
    wx.request({
      url: 'https://v.juhe.cn/toutiao/index',
      data:{
        type:'yule',
        key:'4ce75156f52c84f38414d8853bc30f6f'
      },
      method: 'GET',
      header: {
        "Content-Type": "application/json,application/json"
      },
      success:function(res){
       console.log(res)
      },
    })

    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
