<template>
  <div class="jubaojiemian">
    <div class="head">
      <div class="back" @click="back">
        <img src="../../assets/images/fanhui.png" alt="">
      </div>
      <div class="title">举报</div>
      <div class="mat"></div>
    </div>
    <div class="cause">
      <van-cell value="请选择" is-link style="box-sizing: border-box;width: 100%;height: 100%">
        <template #title>
          <span class="ct" style="color: #EF0600;vertical-align:middle;">*</span>
          <span class="causeTitle ct">举报原因</span>
        </template>
      </van-cell>
    </div>
    <div class="desc">
      <div class="descTitle">举报描述</div>
      <div class="descCon">
        <textarea placeholder="请输入举报描述"></textarea>
        <van-uploader v-model="fileList" multiple :max-count="4">
          <div class="upload">
            <img src="../../assets/upload.png" alt="">
            <span>上传图片</span>
          </div>
        </van-uploader>
        <p class="tab">{{fileList.length}}/4张</p>
      </div>
    </div>
    <div class="btn">举报</div>
  </div>
</template>

<script>
export default {
  name: 'jubao',
  data(){
    return {
      fileList: [
        { url: 'https://img.yzcdn.cn/vant/leaf.jpg' },
      ],
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .jubaojiemian{
    background-color:#f5f5f5;
    width: 100%;
    min-height: 100%;
  }
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
    background-color: #fff;
  }
  .title{
    width: 50%;
    height: 100%;
    font-size: 18px;
    text-align: center;
    line-height: 44px;
    color: #333333;
    font-weight: bold;
  }
  .back{
    width: 17px;
    height: 17px;
    margin-left: 6.5px;
  }
  .mat{
    width: 17px;
    height: 17px;
    margin-right: 6.5px;
  }
  .back>img{
    width: 100%;
    height: 100%;
  }
  .cause{
    overflow: hidden;
    width: 345px;
    height: 45px;
    margin: 10px auto 0;
    border-radius: 5px;
  }
  .ct{
    font-size: 15px;
    color: #333;
    line-height: 25px;
  }
  .causeTitle{
    margin-left: 1px;
  }
  .desc{
    overflow: hidden;
    width: 345px;
    height: 300px;
    margin: 10px auto 0;
    border-radius: 5px;
    background-color: #fff;
  }
  .descTitle{
    width: 100%;
    height: 45px;
    font-size: 15px;
    line-height: 45px;
    text-indent: 10.5px;
    color: #333;
  }
  .descCon{
    box-sizing: border-box;
    width: 100%;
    height: 255px;
    padding: 10.5px;
  }
  .descCon>textarea{
    width: 100%;
    height: 124px;
    margin-bottom: 5px;
    border: unset;
    font-size: 12px;
    line-height: 22px;
    color: #777;
  }
  .upload{
    width: 75px;
    height: 75px;
    border: 0.5px solid #ccc;
    border-radius: 5px;
  }
  .upload>img{
    display: block;
    width: 19px;
    height: 18px;
    margin: 17px auto 0;
  }
  .upload>span{
    display: block;
    width: 100%;
    height: 10px;
    margin-top: 10px;
    font-size: 10px;
    line-height: 10px;
    color: #ccc;
    text-align: center;
  }
  .tab{
    width: 100%;
    height: 12px;
    font-size: 10px;
    line-height: 12px;
    color: #ccc;
    text-align: right;
  }
  .btn{
    width: 271px;
    height: 42px;
    margin: 60px auto 0;
    background: url("../../assets/button.png") no-repeat 0 0 / 100% 100%;
    font-size: 18px;
    line-height: 42px;
    color: #fff;
    text-align: center;
  }
</style>

<style>
  .jubaojiemian .van-uploader__preview{
    width: 75px;
    height: 75px;
    margin-bottom: 0;
    margin-right: 8px;
  }
  .jubaojiemian .van-uploader__preview:nth-last-child(1){
    margin-right: 0;
  }
  .jubaojiemian .van-uploader__preview .van-uploader__preview-image{
    width: 75px;
    height: 75px;
  }
  .jubaojiemian .van-uploader__preview .van-uploader__preview-image img{
    width: 75px;
    height: 75px;
  }
</style>
