// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData:[
      {
        img:"../../img/cate/html.png",
        text:"html"
      },
      {
        img: "../../img/cate/css3.png",
        text: "css3"
      },
      {
        img: "../../img/cate/js.png",
        text: "javascript"
      },
      {
        img: "../../img/cate/jquery.png",
        text: "jquery"
      },
      {
        img: "../../img/cate/angular.png",
        text: "angular"
      },
      {
        img: "../../img/cate/vue.png",
        text: "vue"
      },
      {
        img: "../../img/cate/react.png",
        text: "react"
      },
      {
        img: "../../img/cate/bootstrap.png",
        text: "bootstrap"
      },
      {
        img: "../../img/cate/nodejs.png",
        text: "nodeJs"
      },
      {
        img: "../../img/cate/other.png",
        text: "other"
      },
      
    ]
  },
  
  //列表点击事件
  itemChose:function(){
    wx.showActionSheet({
      itemList: [
        '顺序查看',
        '随机查看'
      ],
      success: function (res) {

        switch(res.tapIndex){
          case 0:
          case 1:
            wx.navigateTo({
              url: '../detail/detail?index='+res.tapIndex,
              success: function (res) { console.log(res) },
              fail: function (res) { console.log(res) },
              complete: function (res) { console.log(res) },
            })
          break;
        }       
      },
      fail:function(res){

      }
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})