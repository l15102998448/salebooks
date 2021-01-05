<template>
  <div class="main">
    <div class="top-nav">
      <div class="flex-ju-between top-nav-center">
        <span>欢迎光临书轩阁</span>
        <div class="flex-ju-between top-nav-right">
          <span>admin</span>
          <span>个人中心</span>
          <span>退出</span>
        </div>
      </div>
    </div>
    <div class="top-banner flex-ju-al-center">
      <img src="../assets/img/nav-banner.jpg" style="width: 80%">
    </div>
    <div class="navigation">
      <div class="nav-content d-flex" v-if="$route.path !== '/car'">
        <div class="d-flex nav-con-left">
          <img src="../assets/img/books.png" class="mr-32">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item v-for="(item,i) in navList" :key="'item'+ i" :index="item.index">{{ item.label }}</el-menu-item>
          </el-menu>
        </div>
        <div class="flex-ju-between nav-con-right">
          <el-input v-model="sales" class="mr-8" placeholder="商品搜索"></el-input>
          <el-button type="primary">搜索</el-button>
        </div>
      </div>
      <router-view />
    </div>
    <div class="footer mt-16">
        <div class="fo-ban"></div>
        <p>版权归本人所有</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      activeIndex: '1',
      sales: '',
      navList: [
        { index: '1', label: '首页' },
        { index: '2', label: '科普类' },
        { index: '3', label: '文学类' },
        { index: '4', label: '英语' },
        { index: '5', label: '历史类' },
        { index: '6', label: '教育类' }
      ]
    }
  },
  created () {
    this.handleSelect('1')
    this.$bus.$on('changeIndex', () => {
      this.handleSelect('1')
    })
  },
  methods: {
    handleSelect (event, value) {
      console.log(this.activeIndex, event)
      switch (event) {
        case '1':
          if (this.$route.path !== '/homeContent') {
            this.$router.push({name: 'homeContent'})
          }
          break
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
          if (this.$route.path !== '/category') {
            this.$router.push({name: 'category'})
          }
      }
    }
  },
  destroyed () {
    this.$bus.$off('changeIndex')
  }
}
</script>

<style lang="scss" scoped>
.top-nav{
  background: #f7f7f7;
  font-size:8px;
  div{
    padding: 2px;
  }
  .top-nav-center{
    width: 1200px;
    margin:0 auto;
    .top-nav-right span{
      padding:0 4px;
    }
  }
}
.top-banner {
  height: 100px;
  min-width: 1210px;
  overflow: hidden;
}
  .nav-content{
    width: 1200px;
    margin:0 auto;
    img {
      width: 70px;
      height: 70px;
    }
    .nav-con-left{
      width: 800px;
      .el-menu-demo{
        border-bottom: none;
      }
      .el-menu-demo>>>.el-menu-item{
        font-size: 16px;
        padding: 0 30px;
      }
    }
    .nav-con-right{
      align-items: center;
      line-height: 70px;
      button {
        height: 40px;
        padding:0 20px;
      }
    }
  }
.footer{
    width: 100vw;
    background: #ececec;
    .fo-ban{
      width: 1200px;
      height: 100px;
      margin:auto;
      background: url("../assets/img/foot.png") no-repeat;
    }
    p{
      font-size:12px;
    }
  }
</style>
