<template>
  <div style="background-color:#f5f5f5;width: 100%;min-height: 100%">
    <div class="my">
      <div class="back" @click="back">
        <img src="../../assets/images/fanhui.png" alt="">
      </div>
      <div class="user">
        <img src="../../assets/user.png" alt="">
      </div>
      <div class="mat">
        <p>15554326789</p>
      </div>
    </div>
    <div class="zxbd">
      <div class="zixun" @click="goZixun">
        <img class="img" src="../../assets/zixun.png" alt="">
        <span class="textTitle">咨询记录</span>
        <img class="jiantou" src="../../assets/images/jt.png" alt="">
      </div>
      <div class="bangdingwx" @click="goBangdingwx">
        <img class="img" src="../../assets/images/lxkf.png" alt="">
        <span class="textTitle">绑定微信</span>
        <img class="jiantou" src="../../assets/images/jt.png" alt="">
      </div>
      <div class="hengxian"></div>
    </div>
    <div class="zuping" @click="isZuping=!isZuping">
      <img class="img" src="../../assets/sqgw.png" alt="">
      <span class="textTitle">{{isZuping ? '租赁管理' : '申请成为租赁顾问'}}</span>
      <img class="jiantou" src="../../assets/images/jt.png" alt="">
      <span class="isMessage" v-show="isZuping">请完善信息</span>
    </div>
    <div class="zhanghao">
      <img class="img" src="../../assets/shezhi.png" alt="">
      <span class="textTitle">账号设置</span>
      <img class="jiantou" src="../../assets/images/jt.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'my',
  data(){
    return {
      isZuping: false
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    goZixun(){
      this.$router.push('zixun')
    },
    goBangdingwx(){
      this.$router.push('Accountsettings')
    }
  }
}
</script>

<style scoped>
  .my{
    position: relative;
    width: 100%;
    height: 168.6px;
    background: url("../../assets/myTopBg.png") no-repeat 0 0 / 100% 100%;
  }
  .back{
    position: absolute;
    width: 17px;
    height: 17px;
    top: 13px;
    left: 6.5px;
  }
  .user{
    position: absolute;
    width: 67px;
    height: 67px;
    top: 62px;
    left: 0;
    right: 0;
    z-index: 1;
    margin: auto;
  }
  .mat{
    position: absolute;
    width: 345px;
    height: 100px;
    top: 96px;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 10px;
    background-color: #fff;
  }
  .mat>p{
    width: 100%;
    height: 14px;
    margin-top: 57.5px;
    font-size: 14px;
    line-height: 14px;
    text-align: center;
    color: #3E3E3E;
  }
  .my img{
    width: 100%;
    height: 100%;
  }
  .zxbd{
    position: relative;
    overflow: hidden;
    width: 345px;
    height: 113px;
    margin: 47.5px auto 0;
    background-color: #fff;
    border-radius: 10px;
  }
  .zixun,.bangdingwx{
    width: 100%;
    height: 50%;
  }
  .hengxian{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 309.65px;
    height: 0.35px;
    background-color: #EAEEF9;
    margin: auto;
  }
  .img{
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-left: 19.5px;
    vertical-align: middle;
  }
  .textTitle{
    display: inline-block;
    margin-left: 24px;
    font-size: 15px;
    line-height: 56.5px;
    color: #4D4D4D;
  }
  .isMessage{
    float: right;
    height: 100%;
    margin-right: 12.5px;
    font-size: 15px;
    line-height: 56.5px;
    color: #AF68FB;
  }
  .jiantou{
    float: right;
    width: 16px;
    height: 16px;
    margin-top: 20px;
    margin-right: 16px;
  }
  .zuping,.zhanghao{
    overflow: hidden;
    width: 345px;
    height: 56px;
    margin: 15px auto 0;
    background-color: #fff;
    border-radius: 10px;
  }
</style>

<style>
</style>
