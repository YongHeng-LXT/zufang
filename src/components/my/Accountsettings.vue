<template>
  <div style="background-color:#f5f5f5;width: 100%;min-height: 100%">
    <div class="head">
      <div class="back" @click="back">
        <img src="../../assets/images/fanhui.png" alt="">
      </div>
      <div class="title" @click="isRevise=!isRevise">绑定微信</div>
      <div class="mat">
        <div class="revise" v-show="isRevise">
          修改
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accountsettings',
  data(){
    return {
      isRevise: false
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
    position: relative;
    width: 17px;
    height: 100%;
    margin-right: 6.5px;
  }
  .mat>.revise{
    position: absolute;
    width: 32px;
    height: 44px;
    top: 0;
    right: 11.5px;
    font-size: 15px;
    line-height: 44px;
    text-align: right;
    color: #333;
  }
</style>
