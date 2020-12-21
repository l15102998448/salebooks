<template>
    <div class="main">
      <el-form :form="form" :rules="{}">
        <el-input placeholder="请输入账号" v-model="form.account">
          <template #suffix></template>
        </el-input>
        <el-input placeholder="请输入密码" v-model="form.password">
          <template #suffix icon="el-icon-user"></template>
        </el-input>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      form:{
        account:'', //账号
        password:'', //密码
      }

    }
  }
}
</script>
<style lang="scss">
  .main {
    /*background-image: url("../assets/img/login-bg.jpg");*/
    display: flex;
    justify-content: center;
    align-items: center;
    form {
      padding:30px;
    }
  }
</style>
