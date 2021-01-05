<template>
  <div class="main">
    <div class="title d-flex mb-12">
      <router-link to="/homeContent"><h5>首页</h5></router-link>
      <span>/ 筛选的列表</span>
    </div>
      <div class="cate-box d-flex" @click="goToDetail">
        <img src="../assets/img/cate01.jpg" class="mr-20">
        <div>
          <p class="cate-title"> 小王子（名家全译本，原版插图精美再现，版语文教材阅读，傅雷翻译出版奖得主郑克鲁法语原文直译） 被誉为阅读量仅次于《圣经》的zui佳读物，被译成300多种语言，销量高达5亿册！首次完整揭秘作者的人生传奇故事，展示与《小王子》有关的钱币、纪念章、邮票等精美周边图片。</p>
          <p class="price mt-8 mb-8">
            <span class="list-now-price">¥ 22.10 </span>
            <span class="list-before-price">定价：¥26.00 (8.5折) </span>
          </p>
          <p>简介：纯净而深刻、唯美而忧伤的爱之隐喻， 既献给孩子，也献给大人的哲理童话。 这是一部奇迹般的作品。它被译成250多种语言，全球发行量达5亿册； 它被被全球亿万读者肯定，阅读量仅次于《圣经》。 《小王子》是一部童话，</p>
          <div class="flex-ju-start mt-8">
            <el-button type="danger" plain>查看详情</el-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'category',
  methods: {
    goToDetail () {
      this.$router.push({name: 'detail'})
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
    border:1px solid #ececec;
    padding:10px;
    font-size: 14px;
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
