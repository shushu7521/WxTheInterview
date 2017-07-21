// pages/detail/detail.js
var Bmob = require('../../utils/bmob/bmob.js');
var db = require('../../utils/db.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    trueAns: "",
    showAns: "none",
    showBtnText:"显示答案",
    Itype:"",
    type:"",
    showNone:false
  },
  showTrueAnswer: function () {

    if (this.data.showAns == 'none') {
      this.setData({
        showAns: 'block',
        showBtnText:'隐藏答案'
      })
    } else {
      this.setData({
        showAns: 'none',
        showBtnText:'显示答案'        
      })
    }

  },

  /**
   * 下一题
   */
  showNext:function(){

    this.getInterRand(this.data.Itype);

  },

  //随机获取一道面试题
  getInterRand: function (Itype){
    var that = this;
    var Itype = Bmob.Object.extend(Itype);
    var itype = new Bmob.Query(Itype);
    itype.notEqualTo("passExam", false);
    // 查询所有数据
    itype.find({
      success: function (results) {
        console.log(results);
        // console.log(results.length);
        // wx.setStorage("dbMaxline", results.length);//同步保存给本地
        // return results.length;
        var num = parseInt(Math.random() * results.length);

        if (results.length==0){
          that.setData({
            showNone:true
          })
          return;
          }
        else if (num==0) { this.getInterRand(Itype)}

        var result = results[num];
        console.log(result);
        if (result.attributes.type == "danxuan") {
          that.setData({
            title: result.attributes.title,
            ans1: "A." + JSON.parse(result.attributes.answer).ans1,
            ans2: "B." + JSON.parse(result.attributes.answer).ans2,
            ans3: "C." + JSON.parse(result.attributes.answer).ans3,
            ans4: "D." + JSON.parse(result.attributes.answer).ans4,
            trueAns: result.attributes.trueAnswer,
            type: result.attributes.type
          })
        } else {
          that.setData({
            title: result.attributes.title,
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            trueAns: result.attributes.trueAnswer,
            type: result.attributes.type            
          })
        }

      },
      error: function (error) {
        console.log(error);
      }
    });


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this;
    // console.log(options);
    var index = options.index;
    var Itype = options.Itype;

    this.setData({
      Itype: options.Itype
    })
    this.getInterRand(Itype);   
    
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