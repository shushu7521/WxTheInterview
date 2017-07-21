// pages/upload/upload.js

var db = require('../../utils/db.js');
var util = require('../../utils/util.js');

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

      var data = {
        title:this.data.title,
        ans1: this.data.ans1,
        ans2: this.data.ans2,
        ans3: this.data.ans3,
        ans4:this.data.ans4,
      }
      if(!util.isEmpty(data)) return;

      inter.trueAnswer = this.data.answer[this.data.answerIndex];
      db.insert(inter.Itype,
                inter.type,
                inter.title,
                JSON.stringify(inter.answer),
                inter.trueAnswer
                );

      wx.showToast({
        title: '上传成功，等待审核',
      })

      //清空
      this.setData({
        title: "",
        ans1: "",
        ans2: "",
        ans3: "",
        ans4: ""
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
    var data = {
      JTitle: this.data.JTitle,
      Jans: this.data.Jans
    }
    if (!util.isEmpty(data)) return;

    db.insert(inter.Itype,
      inter.type,
      inter.title,
      "",
      JSON.stringify(inter.trueAnswer),
    );

    wx.showToast({
      title: '上传成功，等待审核',
    })

    
    this.setData({
      Jtitle:"",
      Jans:""
    })
    
  },

})