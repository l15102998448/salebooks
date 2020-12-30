<template>
    <div class="main">
      <el-form :form="form" :rules="{}">
        <el-input placeholder="请输入账号" v-model="form.account">
          <template #suffix></template>
        </el-input>
        <el-input placeholder="请输入密码" v-model="form.password" type="password">
          <template #suffix icon="el-icon-user"></template>
        </el-input>
      </el-form>
    </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      form: {
        // account: '',
        // password: ''
      }

    }
  }
}
</script>
<style lang="scss">
  .main {
    height: 100vh;
    background: url("../assets/img/login-bg.jpg") no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
      padding:30px;
    }
  }
</style>
