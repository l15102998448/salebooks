<template>
  <div class="navigation">
    <template>
      <el-carousel indicator-position="outside" type="card" height="260px">
        <el-carousel-item v-for="(item,index) in banList" :key="index">
          <img :src="item.src" />
        </el-carousel-item>
      </el-carousel>
    </template>
    <div class="main-con">
      <div class="title mb-16">
        <span>书轩聚集</span>
        <span>倾情推荐当下最热门书籍</span>
      </div>
      <ul class="d-flex con-list">
        <li v-for="(item,i) in list" :key="i">
          <img :src="item.url">
          <p class="list-title">{{ item.title }}</p>
          <p class="list-author">{{ item.author }}</p>
          <span class="list-now-price">¥{{ item.nowPrice }}</span>
          <span class="list-before-price">¥{{ item.beforePrice }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeContent',
  data () {
    return {
      banList: [
        { src: require('../assets/img/banner01.jpg'), key: '1' },
        { src: require('../assets/img/banner02.jpg'), key: '2' },
        { src: require('../assets/img/banner03.jpg'), key: '3' },
        { src: require('../assets/img/banner04.jpg'), key: '4' }
      ],
      list: [
        { url: require('../assets/img/l1.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l2.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l3.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l4.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l5.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l6.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l7.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l8.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l4.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l6.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l5.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' },
        { url: require('../assets/img/l6.jpg'), title: '这是标题1', author: '这是作者名称', nowPrice: '22.00', beforePrice: '58.00' }
      ]
    }
  }
}
</script>

<style  lang="scss" scoped>
  .main-con{
    width: 1200px;
    margin:0 auto;
    text-align: left;
  .title{
    font-size: 14px;
    color:#999;
  span:first-child{
    color:#000;
    font-weight: bold;
    font-size:16px;
  }
  }
  }
  .con-list{
    flex-wrap: wrap;
    flex-shrink: 1;
    border-top: 1px solid #d4d9de;
  li {
    border-bottom: 1px solid #d4d9de;
    border-left: 1px solid #d4d9de;
    list-style: none;
    padding: 24px;
  .list-title {
    font-size:12px !important;
  }
  .list-author {
    font-size:12px !important;
    color:#999 !important;
  }
  .list-now-price {
    color:red;
    font-weight: bold;
    margin-right: 10px;
  }
  .list-before-price {
    color:#999;
    font-size:12px;
    text-decoration:line-through;
  }
  }
  li:nth-child(6n){
    border-right:1px solid #d4d9de;
    padding:26px;
  }
  }

</style>
