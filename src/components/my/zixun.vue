<template>
  <div>
    <div class="head">
      <div class="back" @click="back">
        <img src="../../assets/images/fanhui.png" alt="">
      </div>
      <div class="title">咨询记录</div>
      <div class="mat"></div>
    </div>
    <ul class="list">
      <li>
        <div class="left">
          <img src="../../assets/user.png" alt="">
          <div class="name">
            <p>李洲洲</p>
            <span>补300元/3期</span>
          </div>
        </div>
        <div class="right">
          <div class="lxkf">
            <img src="../../assets/images/lxkf.png" alt="">
          </div>
          <div class="jubao" @click="jubao">
            <img src="../../assets/images/jubao.png" alt="">
          </div>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/user.png" alt="">
          <div class="name">
            <p>李洲洲</p>
            <span>补300元/3期</span>
          </div>
        </div>
        <div class="right">
          <div class="lxkf">
            <img src="../../assets/images/lxkf.png" alt="">
          </div>
          <div class="jubao" @click="jubao">
            <img src="../../assets/images/jubao.png" alt="">
          </div>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/user.png" alt="">
          <div class="name">
            <p>李洲洲</p>
            <span>补300元/3期</span>
          </div>
        </div>
        <div class="right">
          <div class="lxkf">
            <img src="../../assets/images/lxkf.png" alt="">
          </div>
          <div class="jubao" @click="jubao">
            <img src="../../assets/images/jubao.png" alt="">
          </div>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/user.png" alt="">
          <div class="name">
            <p>李洲洲</p>
            <span>补300元/3期</span>
          </div>
        </div>
        <div class="right">
          <div class="lxkf">
            <img src="../../assets/images/lxkf.png" alt="">
          </div>
          <div class="jubao" @click="jubao">
            <img src="../../assets/images/jubao.png" alt="">
          </div>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/user.png" alt="">
          <div class="name">
            <p>李洲洲</p>
            <span>补300元/3期</span>
          </div>
        </div>
        <div class="right" @click="jubao">
          <div class="lxkf">
            <img src="../../assets/images/lxkf.png" alt="">
          </div>
          <div class="jubao">
            <img src="../../assets/images/jubao.png" alt="">
          </div>
        </div>
      </li>
      <li>
        <div class="left">
          <img src="../../assets/user.png" alt="">
          <div class="name">
            <p>李洲洲</p>
            <span>补300元/3期</span>
          </div>
        </div>
        <div class="right">
          <div class="lxkf">
            <img src="../../assets/images/lxkf.png" alt="">
          </div>
          <div class="jubao" @click="jubao">
            <img src="../../assets/images/jubao.png" alt="">
          </div>
        </div>
      </li>
    </ul>
    <p class="tips">没有更多了</p>
  </div>
</template>

<script>
export default {
  name: 'zixun',
  methods: {
    back(){
      this.$router.go(-1)
    },
    jubao(){
      this.$router.push("jubao")
    }
  }
}
</script>

<style scoped>
  .head{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 44px;
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
  .list{
    width: 100%;
    height: auto;
  }
  .list>li{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 355px;
    height: 60px;
    margin: 15px auto;
    border-radius: 5px;
    box-shadow: 0 0 14.5px 0 rgba(4,0,0,0.15);
  }
  .list>li>.left{
    display: flex;
    align-items: center;
    width: 60%;
    height: 100%;
  }
  .list>li>.left>img{
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-left: 10px;
  }
  .list>li>.left>.name{
    display: inline-block;
    height: 100%;
    margin-left: 16px;
    font-size: 0;
  }
  .list>li>.left>.name>p{
    height: 34px;
    font-size: 16px;
    color: #333;
    line-height: 34px;
  }
  .list>li>.left>.name>span{
    display: inline-block;
    height: 16px;
    padding: 0 5px;
    background-color: #AC63FB;
    border-radius: 2px;
    font-size: 10px;
    color: #FFFFFF;
    line-height: 16px;
  }
  .list>li>.right{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 58px;
    height: 100%;
    margin-right: 17px;
  }
  .list>li>.right>div{
    display: inline-block;
    width: 22px;
    height: 20px;
  }
  .list>li>.right>div>img{
    width: 100%;
    height: 100%;
  }
  .tips{
    width: 100%;
    height: 12px;
    margin-top: 68.5px;
    font-size: 12px;
    color: #969CA8;
    text-align: center;
  }
</style>
