// pages/upload/upload.js

var db = require('../../utils/db.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:3,
    cateArr:['html','css','javascropt','bootstrap','jquery','angular','vue','react','nodeJS','other'],
    index: 3,
    answer:['A','B','C','D'],
    answerIndex:0,
    tab1bg: '#66ccff',
    tab2bg: '#eee',
    danxuanDisplay:"block",
    jiandaDisplay:"none",
    title:"",
    ans1:"",
    ans2:"",
    ans3:"",
    ans4:"",
    JTitle:"",
    Jans:""
  },
  //类型picker选择
  bindItypeChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },

  //答案picker选择
  bindPickerChange: function (e) {
    this.setData({
      answerIndex: e.detail.value
    })
  },

  //选择tab
  chooseTab:function(e){
      var that = this;
      console.log(e);
      switch(e.currentTarget.dataset.tab){

          case "danxuan":

          that.setData({
              danxuanDisplay:"block",
              jiandaDisplay:"none",
              tab1bg:"#66ccff",
              tab2bg:"#eee"
            })

            break;
          
          case "jianda":

          that.setData({
            danxuanDisplay: "none",
            jiandaDisplay: "block",
            tab1bg: "#eee",
            tab2bg: "#66ccff"
          })

          break;

      }

  },

  //设置title
  setTitle:function(e){
    this.setData({
      title:e.detail.value
    })
  },

  //设置简答Title
  setJTitle:function(e){
    this.setData({
      JTitle: e.detail.value
    })
  },


  //设置答案1
  setAns1:function(e){
    this.setData({
      ans1: e.detail.value
    })    
  },

  //设置答案2
  setAns2: function (e) {
    this.setData({
      ans2: e.detail.value
    })
  },

  //设置答案3
  setAns3: function (e) {
    this.setData({
      ans3: e.detail.value
    })
  },

  //设置答案4
  setAns4: function (e) {
    this.setData({
      ans4: e.detail.value
    })
  },

  //设置简答题答案
  setJans: function (e) {
    this.setData({
      Jans: e.detail.value
    })
  },

  //上传单选题
  uploadDanxuan:function(){
      var that = this;
      var inter = new Object();
      inter.type='danxuan';
      inter.Itype = this.data.cateArr[this.data.index];
      inter.title=this.data.title;
      inter.answer = {
        ans1:this.data.ans1,
        ans2:this.data.ans2,
        ans3:this.data.ans3,
        ans4:this.data.ans4
      };
      inter.trueAnswer = this.data.answer[this.data.answerIndex];

      // console.log(inter);
      // console.log(JSON.stringify(inter.answer));

      db.insert(inter.Itype,
                inter.type,
                inter.title,
                JSON.stringify(inter.answer),
                inter.trueAnswer
                );

      wx.showToast({
        title: '上传成功，等待审核',
      })


  },

  //上传简答题
  uploadJianda:function() {

    var inter = new Object();
    inter.type = 'jianda';
    inter.Itype = this.data.cateArr[this.data.index];
    inter.title = this.data.JTitle;
    inter.trueAnswer = this.data.Jans;

    // console.log(inter);

    db.insert(inter.Itype,
      inter.type,
      inter.title,
      "",
      JSON.stringify(inter.trueAnswer),
    );

    wx.showToast({
      title: '上传成功，等待审核',
    })
  },

  clear:function(){

    this.setData({
      title: "",
      ans1: "",
      ans2: "",
      ans3: "",
      ans4: ""
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