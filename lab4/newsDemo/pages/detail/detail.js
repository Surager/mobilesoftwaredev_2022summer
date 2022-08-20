const {
  getNewsDetail
} = require("../../utils/common");

// pages/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {
      id: '264698',
      title: '无标题',
      poster: '',
      content: '无内容',
      add_date: '1900-01-01'
    },
    isAdd:false
  },
  addFavourites:function(options){
    let article = this.data.article;
    wx.setStorageSync(article.id, article)
    this.setData({isAdd:true})
  },
  cancelFavourites:function(options){
    let article = this.data.article;
    wx.removeStorageSync(article.id)
    this.setData({isAdd:false})
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let id = options.id;
    var article = wx.getStorageSync(id)
    if (article != '') {
      this.setData({
        article: article,
        isAdd: true
      })
    } else {
      let result = getNewsDetail(id);
      if (result.code == '200') {
        this.setData({
          article: result.news,
          isAdd:false
        })
      }
    }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})