var Bmob = require('./bmob/bmob.js');
var app = getApp();
// var dbMaxline =0;

/**
 * 插入一条题
 */
function insert(Itype,type,title,answer,trueAnswer){
    var Itype = Bmob.Object.extend(Itype);
    var itype = new Itype();
    // 添加数据，第一个入口参数是Json数据
    itype.save({
      type:type,
      title: title,
      answer: answer,
      trueAnswer: trueAnswer,
      passExam:false
    }, {
      success: function(result) {
        // 添加成功
        console.log(result);
      },
      error: function(result, error) {
        // 添加失败
        console.log(result, error);        
      }
    });
}


/**
 * 查找表最大行数
 */
function getMaxLine(Itype){
  var Itype = Bmob.Object.extend(Itype);
  var itype = new Bmob.Query(Itype);
  // 查询所有数据
  itype.find({
    success: function (results) {
      console.log(results.length);
      wx.setStorage("dbMaxline", results.length);//同步保存给本地
      return results.length;
    },
    error: function (error) {
      console.log(error);
    }
  });
}

/**
 * 生成不大于maxlen的随机数
 */
function randomNum(){
  var maxlen = wx.getStorage("dbMaxline");
  console.log(maxlen);
  return parseInt( Math.random()*maxlen);
}

/**
 * 查找一条
 */
function getInter(Itype,index){
  var Itype = Bmob.Object.extend(Itype);
  var query = new Bmob.Query(Itype);
  // 查询所有数据
  query.find({
    success: function (results) {
        var result = results[index];
        // console.log(result);
        wx.setStorageSync('interResult',result);
    },
    error: function (error) {
      console.log(error);
    }
  });
}




module.exports={
  insert: insert,
  getMaxLine: getMaxLine,
  randomNum: randomNum,
  getInter: getInter
}