<template>
  <div class="regBox">
    <el-form :model="form" ref='form' :rules="rules">
      <el-form-item label="账号" prop="account" class="d-flex">
        <el-input v-model="form.account" prefix-icon="el-icon-user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" class="d-flex">
        <el-input v-model="form.password" prefix-icon="el-icon-lock"></el-input>
      </el-form-item>
      <el-button type = "primary" style="width:100%" @click="register">注册</el-button>
      <div class="flex-ju-between">
        <el-button type="text" @click="$router.push({name:'login'})">返回登录</el-button>
        <el-button type="text">忘记密码</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'registered',
  data () {
    return {
      form: {},
      rules: {
        account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}]
      }
    }
  },
  methods: {
    // 注册
    register () {
      console.log('注册', this.form)
    }
  }
}
</script>

<style lang="scss">
  .regBox {
    height: 100vh;
    background: url("../assets/img/login-bg.jpg") no-repeat center center/cover;
    display: flex;
    justify-content: center;
    align-items: center;
    form {
      padding:30px;
      background: white;
      opacity: .8;
      input {
        margin-bottom: 10px;
      }
    }
  }
</style>
