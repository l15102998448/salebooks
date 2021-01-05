<template>
  <div class="main">
    <div class="title d-flex mb-12">
      <router-link to="/homeContent"><h5>首页</h5></router-link>
      <span>/ 小王子</span>
    </div>
    <ul>
      <li class="cate-box d-flex">
        <img src="../assets/img/cate01.jpg" class="mr-20">
        <div>
          <p class="cate-title"> 小王子（名家全译本，原版插图精美再现，版语文教材阅读，傅雷翻译出版奖得主郑克鲁法语原文直译） 被誉为阅读量仅次于《圣经》的zui佳读物，被译成300多种语言，销量高达5亿册！首次完整揭秘作者的人生传奇故事，展示与《小王子》有关的钱币、纪念章、邮票等精美周边图片。</p>
          <p class="price mt-8 mb-8">
            <span class="list-now-price">¥ 22.10 </span>
            <span class="list-before-price">定价：¥26.00 (8.5折) </span>
          </p>
          <p>简介：纯净而深刻、唯美而忧伤的爱之隐喻， 既献给孩子，也献给大人的哲理童话。 这是一部奇迹般的作品。它被译成250多种语言，全球发行量达5亿册； 它被被全球亿万读者肯定，阅读量仅次于《圣经》。 《小王子》是一部童话，</p>
          <div class="flex-ju-start mt-8 mb-20">
            <el-input-number v-model="booksNum" :min="1" :max="10" style="width: 125px" ></el-input-number>
            <el-button type="primary" class="ml-12" @click="toCar">加入购物车</el-button>
          </div>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="商品详情" name="detail">本商品暂无详情。</el-tab-pane>
            <el-tab-pane label="商品评论" name="comment">商品评论</el-tab-pane>
            <el-tab-pane label="商品问答" name="questions">目前没有问答</el-tab-pane>
          </el-tabs>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      booksNum: 1,
      activeName: 'detail'
    }
  },
  methods: {
    handleClick () {
      console.log('tab切换')
    },
    toCar () {
      console.log(this.booksNum, '购物车')
      this.$router.push({ name: 'car' })
    }
  }
}
</script>

<style lang="scss" scoped>
  .main{
    width: 1200px;
    margin:5px auto;
  .title{
    font-size: 14px;
  }
  .cate-box{
  &:hover{
     background: #f8f8f8;
   }
  width: 1000px;
  /*border:1px solid #ececec;*/
  padding:10px;
  font-size: 14px;
    img{
      width: 600px;
      height: 251px;
    }
  .cate-title{
    color:#1a66b3;
  }
  .price{
    text-align: left;
  .list-now-price {
    color:red;
    font-size:16px;
    font-weight: bold;
    margin-right: 10px;
  }
  .list-before-price {
    color:#999;
    font-size:12px;
    text-decoration:line-through;
  }
  }
  button{
    padding: 8px;
  }
  }
  }
</style>
