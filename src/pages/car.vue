<template>
    <div class="car-box">
      <div class="title mb-12">购物车列表</div>

      <el-table :data="tableData" >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="goodsInfo" label="" width="250px">
          <template slot-scope="scope">
              <div class="d-flex">
                <img class="mr-12" src="../assets/img/cate01.jpg" style="height: 80px;">
                <div class="mt-20">
                  <p class="mb-20" style="color:#409EFF">{{ scope.row.goodsInfo }}</p>
                  <p>这是作者</p>
                </div>
              </div>
          </template>
        </el-table-column>
        <el-table-column prop="singlePrice" label="单价 (元) ">
          <template slot-scope="scope">
            <span style="color:#000;font-weight: bold">¥ {{ scope.row.singlePrice }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="num" label="数量">
          <template slot-scope="scope">
            <el-input-number v-model="scope.row.num" :min="1" :max="5" style="width: 125px" @change="changeNum(scope.row,scope.$index)" ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column prop="price" label="金额（元）">
          <template slot-scope="scope">
            <span style="color:red;font-weight: bold">¥ {{ scope.row.price }}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="flex-ju-end mt-20">
        <span>总价：</span>
        <span class="total-price">¥ 200</span>
        <el-button type="danger" class="ml-20">去结算</el-button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'car',
  data () {
    return {
      booksNum: 1,
      tableData: [{
        goodsInfo: '商品信息',
        singlePrice: '29.00',
        num: 2,
        price: '29.00'
      }, {
        goodsInfo: 'aaaaa',
        singlePrice: '30.00',
        num: 5,
        price: '30.00'
      }]
    }
  },
  created () {
    this.tableData.forEach(item => {
      item.price = item.num * item.singlePrice
    })
    console.log(this.tableData)
  },
  methods: {
    deleteRow () {
      console.log('删除')
    },
    changeNum (row, index) {
      this.tableData[index].price = row.num * Number(row.singlePrice).toFixed(2)
    }
  }
}
</script>

<style lang="scss" scoped>
.car-box{
  width: 1200px;
  margin:0 auto;
  .title{
    font-size: 14px;
    text-align: left;
  }
  button {
    padding:10px 25px;
  }
  .total-price{
    color: red;
    font-weight: bold;
  }
}
</style>
