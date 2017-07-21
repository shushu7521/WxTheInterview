// pages/feedback/feedback.js
var Bmob = require('../../utils/bmob/bmob.js'); 
var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fbMsg: "",
    connect: ""
  },


  setdata: function (e) {
    var that = this;
    var ty = e.currentTarget.dataset.tp;
    var value = e.detail.value;
    switch (ty) {
      case "fd":
        that.setData({
          fbMsg: value
        })
        break;
      case "cnn":
        that.setData({
          connect: value
        })
        break;
    }


  },

  //提交数据
  sendFd: function () {

    if(!util.isEmpty(this.data)) return;



    var that =this;
    var fb = Bmob.Object.extend('feedback');
    var feedback = new fb();
    // 添加数据，第一个入口参数是Json数据
    feedback.save({
      fbMsg: that.data.fbMsg,
      connect: that.data.connect,
    }, {
        success: function (result) {
          // 添加成功
          console.log(result);
        },
        error: function (result, error) {
          // 添加失败
          console.log(result, error);
        }
      });


      this.setData({
        fbMsg:'',
        connect:''
      })
  },

})