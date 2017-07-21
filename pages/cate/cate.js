// pages/cate/cate.js
var db = require('../../utils/db.js');
var app = getApp();
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
        text: "css"
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
        text: "nodeJS"
      },
      {
        img: "../../img/cate/other.png",
        text: "other"
      },
      
    ]
  },
  
  //列表点击事件
  itemChose:function(e){

    wx.navigateTo({
      url: '../detail/detail?Itype=' + e.currentTarget.dataset.itype,
      success: function (result) { console.log(result.tapIndex) },
      fail: function (result) { console.log(result) },
      complete: function (result) { console.log(result) },
    })
    
    // wx.showActionSheet({
    //   itemList: [
    //     '顺序查看',
    //     '随机查看'
    //   ],
    //   success: function (res) {

    //     switch(res.tapIndex){
    //       case 0:
    //       case 1:
            
    //       break;
    //     }       
    //   },
    //   fail:function(res){

    //   }
    // })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.getUserInfo();
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