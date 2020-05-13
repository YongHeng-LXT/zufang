<template>
  <div>
    <div class="head">
      <div class="my" v-show="!isShow" @click="goMy">
        <img src="../../assets/header-user.png" alt="">
      </div>
      <div class="my" v-show="isShow" @click="goMy" style="float: left;margin-left: 0.26667rem">
        <img src="../../assets/header-user.png" alt="">
      </div>
      <div class="title">租房APP</div>
    </div>
    <div class="matchingBack">
      <p class="textTitle">为您匹配</p>
      <p class="text">根据选择，为您匹配</p>
    </div>
    <ul class="list">
      <li>
        <img src="../../assets/user.png" alt="">
        <div class="name">
          <p>李洲洲</p>
          <span>补300元/3期</span>
        </div>
        <div class="contact" @click="open">
          <img src="../../assets/images/lxkf.png" alt="">
          <span>联系</span>
        </div>
      </li>
      <li>
        <img src="../../assets/user.png" alt="">
        <div class="name">
          <p>李洲洲</p>
          <span>补300元/3期</span>
        </div>
        <div class="contact" @click="open">
          <img src="../../assets/images/lxkf.png" alt="">
          <span>联系</span>
        </div>
      </li>
      <li>
        <img src="../../assets/user.png" alt="">
        <div class="name">
          <p>李洲洲</p>
          <span>补300元/3期</span>
        </div>
        <div class="contact" @click="open">
          <img src="../../assets/images/lxkf.png" alt="">
          <span>联系</span>
        </div>
      </li>
      <li>
        <img src="../../assets/user.png" alt="">
        <div class="name">
          <p>李洲洲</p>
          <span>补300元/3期</span>
        </div>
        <div class="contact" @click="open">
          <img src="../../assets/images/lxkf.png" alt="">
          <span>联系</span>
        </div>
      </li>
      <li>
        <img src="../../assets/user.png" alt="">
        <div class="name">
          <p>李洲洲</p>
          <span>补300元/3期</span>
        </div>
        <div class="contact" @click="open">
          <img src="../../assets/images/lxkf.png" alt="">
          <span>联系</span>
        </div>
      </li>
      <li>
        <img src="../../assets/user.png" alt="">
        <div class="name">
          <p>李洲洲</p>
          <span>补300元/3期</span>
        </div>
        <div class="contact" @click="open">
          <img src="../../assets/images/lxkf.png" alt="">
          <span>联系</span>
        </div>
      </li>
    </ul>
    <div class="btn">
      <van-button color="#AC63FB" style="min-width: 2.13rem;font-size: 0.37rem;" size="small" plain round>换一批</van-button>
      <van-button color="#AC63FB" @click="back" style="min-width: 2.13rem;font-size: 0.37rem;" size="small" round>重填信息</van-button>
    </div>
    <van-popup
      v-model="isShow"
      style="width: 100%;height: 100%;background-color: rgba(0,0,0,0.2);"
      :close-on-click-overlay="false"
    >
      <div class="QRCode" @click="close">
        <img src="../../assets/Cashwaiting.png" alt="">
        <div class="copy" @click="copy">复制微信号 15538068890</div>
        <div class="save" @click="save">保存图片</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'matching',
  data(){
    return {
      isShow: false,
      el: null
    }
  },
  methods: {
    open(el){
      this.isShow = true;
      this.el = el
    },
    back(){
      this.$router.push("/");
    },
    close(){
      this.isShow = false
      if(this.el){
        let el = this.el
        for (let i = 0; i < el.path.length; i++){
          if(el.path[i].className === "contact"){
            let spanTab = el.path[i].querySelector("span");
            spanTab.innerText = "查看";
            spanTab.style.color = "#333333"
          }
        }
      }
    },
    copy(){
      this.isShow = false
    },
    save(){
      this.isShow = false
    },
    goMy(){
      this.$router.push("my")
    }
  }
}
</script>

<style scoped>
  .head{
    width: 100%;
    height: 44.5px;
  }
  .title{
    width: 30%;
    height: 100%;
    margin: 0 auto;
    font-size: 17.5px;
    text-align: center;
    line-height: 44.5px;
    color: #333333;
    font-weight: bold;
  }
  .my{
    float: right;
    width: 30px;
    height: 100%;
    margin-right: 10px;
  }
  .my>img{
    display: inline-block;
    width: 100%;
    height: 30px;
    margin-top: 7px;
  }
  .matchingBack{
    width: 318.5px;
    height: 64px;
    margin: 15.5px auto 0;
    background: url(../../assets/ppBg.png) no-repeat 0 0 / 100% 100%;
  }
  .matchingBack>.textTitle{
    height: 20px;
    margin: 12.5px auto 0;
    font-size: 20px;
    text-align: center;
    color: #1C1C1C;
  }
  .matchingBack>.text{
    height: 14px;
    margin: 14px auto 0;
    font-size: 14px;
    text-align: center;
    color: #7E7E7E;
  }
  .list{
    width: 100%;
    height: 450px;
  }
  .list>li{
    display: flex;
    align-items: center;
    width: 355px;
    height: 60px;
    margin: 15px auto;
    border-radius: 5px;
    box-shadow: 0 0 14.5px 0 rgba(4,0,0,0.15);
  }
  .list>li>img{
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
  .list>li>.name{
    width: 50%;
    height: 100%;
    margin-left: 16px;
    font-size: 0;
  }
  .list>li>.name>p{
    height: 34px;
    font-size: 16px;
    color: #333;
    line-height: 34px;
  }
  .list>li>.name>span{
    display: inline-block;
    height: 16px;
    padding: 0 5px;
    background-color: #AC63FB;
    border-radius: 2px;
    font-size: 10px;
    color: #FFFFFF;
    line-height: 16px;
  }
  .list>li>.contact{
    box-sizing: border-box;
    width: 80px;
    height: 30px;
    margin-right: 10px;
    border-radius: 15px;
    border: 0.5px solid #AC63FB;
  }
  .list>li>.contact>img{
    display: inline-block;
    width: 22px;
    height: 19px;
    margin-left: 10px;
    vertical-align: middle;
  }
  .list>li>.contact>span{
    display: inline-block;
    margin-left: 6px;
    font-size: 14px;
    line-height: 30px;
    color: #AC63FB;
    vertical-align: middle;
  }
  .btn{
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 30px;
    margin-top: 25px;
    padding: 0 60px;
  }
  .QRCode{
    position: relative;
    height: 100%;
    width: 100%;
  }
  .QRCode>img{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: block;
    width: 250px;
    height: 323.5px;
    margin: auto;
  }
  .QRCode>div{
    position: absolute;
    left: 0;
    right: 0;
    width: 355px;
    height: 49.5px;
    border-radius: 5px;
    margin: auto;
    background-color: #fff;
    font-size: 15px;
    text-align: center;
    line-height: 49.5px;
  }
  .QRCode>.copy{
    bottom: 68px;
  }
  .QRCode>.save{
    bottom: 8.5px;
  }
</style>

<style>
  .van-overlay{
    background-color: rgba(0,0,0,0.2);
  }
</style>
