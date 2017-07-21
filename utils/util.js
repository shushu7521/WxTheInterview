function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function isEmpty(data) {
  for (var d in data) {
    if (data[d] == "" || data[d] == undefined) {
      switch (d) {
        case "title": wx.showToast({ title: '标题不能为空哦', image: '/img/fail.png' }); break;
        case "ans1": wx.showToast({ title: '答案要填全哦', image: '/img/fail.png' }); break;
        case "ans2": wx.showToast({ title: '答案要填全哦', image: '/img/fail.png' }); break;
        case "ans3": wx.showToast({ title: '答案要填全哦', image: '/img/fail.png' }); break;
        case "ans4": wx.showToast({ title: '答案要填全哦', image: '/img/fail.png' }); break;
        case "JTitle": wx.showToast({ title: '标题不能为空哦', image: '/img/fail.png' }); break;
        case "Jans": wx.showToast({ title: '亲，您的答案呢', image: '/img/fail.png' }); break;
        case "fbMsg": wx.showToast({ title: '亲，还没写意见', image: '/img/fail.png' }); break;
        case "connect": wx.showToast({ title: '亲，要留下联系方式哦', image: '/img/fail.png' }); break;
        
        default:continue;
      }
      return false;
    }
  }
  return true;
}

module.exports = {
  formatTime: formatTime,
  isEmpty: isEmpty
}
