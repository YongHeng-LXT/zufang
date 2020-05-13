<template>
  <div>
    <div class="head">
      <div class="place">
        <img src="../../assets/header-left.png" alt="">
        <span>郑州</span>
      </div>
      <div class="my" @click="goMy">
        <img src="../../assets/header-user.png" alt="">
      </div>
      <div class="title">租房APP</div>
    </div>
    <div class="selectBack">
      <p class="textTitle">选择意向信息</p>
      <p class="text">根据选择，更精准推荐</p>
    </div>
    <ul class="select">
      <li @click="select(0)">
        <img src="../../assets/area-servic.png" alt="">
        <span :id="area ? 'selecter' : ''">{{area || '请选择意向区域'}}</span>
        <div :style="`border-top-color:${isSelect ? '#AC63FB' : '#ccc'};`"></div>
      </li>
      <li @click="select(1)">
        <img src="../../assets/metro.png" alt="">
        <span :id="metro ? 'selecter' : ''">{{metro || '请选择地铁口'}}</span>
        <div :style="`border-top-color:${isSelect ? '#AC63FB' : '#ccc'};`"></div>
      </li>
      <li @click="select(2)">
        <img src="../../assets/price.png" alt="">
        <span :id="price ? 'selecter' : ''">{{price || '请选择价格区间'}}</span>
        <div :style="`border-top-color:${isSelect ? '#AC63FB' : '#ccc'};`"></div>
      </li>
    </ul>
    <div class="btn" @click="submit">提交</div>
    <div v-show="isSelect" style="position: fixed;bottom:0;width: 100%;height: 5.33rem;">
      <van-popup
        v-model="isSelect"
        position="buttom"
        style="height: 5.33rem;width: 100%"
      >
        <van-picker
          title="请选择区域"
          show-toolbar
          confirm-button-text="完成"
          visible-item-count="4"
          item-height="40"
          :columns="columns"
          @confirm="onConfirm"
          @cancel="onCancel"
        />
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selcet',
  data(){
    return {
      isSelect: false,
      columns: [
        "22",
        "33",
        "44",
        "55",
        "66",
      ],
      area: '',
      metro: '',
      price: '',
      index: 0
    }
  },
  methods: {
    select(ind){
      this.isSelect = true;
      console.log(ind)
      this.index = ind;
    },
    onConfirm(value) {
      console.log(value);
      this.isSelect = false;
      if(this.index === 0){
        this.area = value
      }else if(this.index === 1){
        this.metro = value
      }else if(this.index === 2){
        this.price = value
      }
    },
    onCancel() {
      this.isSelect = false;
    },
    submit(){
      this.$router.push("matching")
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
  .place{
    width: auto;
    float: left;
    margin-left: 15px;
  }
  .place>img{
    display: inline-block;
    width: 11px;
    height: 18.5px;
    line-height: 44.5px;
    vertical-align: middle;
  }
  .place>span{
    display: inline-block;
    margin-left: 7px;
    font-size: 14px;
    color: #333333;
    line-height: 44.5px;
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
  .selectBack{
    width: 317.5px;
    height: 64px;
    margin: 15px auto 0;
    background: url(../../assets/home-banner.png) no-repeat 0 0 / 100% 100%;
  }
  .selectBack>.textTitle{
    height: 20px;
    margin: 12.5px auto 0;
    font-size: 20px;
    text-align: center;
    color: #1C1C1C;
  }
  .selectBack>.text{
    height: 14px;
    margin: 14px auto 0;
    font-size: 14px;
    text-align: center;
    color: #7E7E7E;
  }
  .select{
    width: 100%;
    margin-top: 71px;
  }
  .select>li{
    width: 330px;
    height: 42px;
    margin: 44px auto 0;
    background-color: #EDEDED;
    border-radius: 21px;
  }
  .select>li>img{
    display: inline-block;
    float: left;
    width: 25px;
    height: 25px;
    margin-left: 18px;
    margin-top: 8.5px;
  }
  .select>li>span{
    display: inline-block;
    width: 50%;
    height: 100%;
    margin-left: 62.5px;
    font-size: 18px;
    line-height: 42px;
    color: #ccc;
  }
  .select>li>div{
    display: inline-block;
    float: right;
    width: 0;
    height: 0;
    margin-top: 16.5px;
    margin-right: 25.5px;
    border: 9.5px solid transparent;
    border-top-color: #ccc;
  }
  .btn{
    width: 334.5px;
    height: 47.5px;
    margin: 90px auto 0;
    background: url("../../assets/button.png") no-repeat 0 0 / 100% 100%;
    font-size: 18px;
    line-height: 41px;
    color: #fff;
    text-align: center;
  }
</style>

<style>
  #selecter{
    width: 70%;
    margin: 0 auto;
    text-align: center;
    color: #333333;
  }
  .van-overlay{
    background-color: rgba(0,0,0,0.2);
  }
  .van-picker__title{
    font-size: 0.48rem;
    color: #333333;
  }
  .van-picker__confirm{
    color: #AC63FB;
  }
  .van-picker__cancel{
    color: #CCCCCC;
  }
  .van-picker__toolbar{
    border-bottom: 1px solid #EDEDED;
  }
</style>
