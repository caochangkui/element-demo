<template>
  <div id="register">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
        <p class="login" @click="gotoLogin">已有账号？点击登录</p>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      }
      setTimeout(() => {
        if (value.length < 3) {
          callback(new Error('用户名不能小于三个字符'))
        } else {
          callback()
        }
      }, 200)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        username: ''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        username: [{ validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  created () {
    if (localStorage.getItem('userList')) {
    } else {
      localStorage.setItem('userList', JSON.stringify(this.$store.state.users))
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          const userList = JSON.parse(localStorage.getItem('userList'))
          userList.push({
            username: this.ruleForm2.username,
            password: this.ruleForm2.pass
          })
          localStorage.setItem('userList', JSON.stringify(userList))
          this.$notify({
            title: '成功',
            message: '注册成功，请登录！',
            type: 'success',
            duration: 3000
          })
          setTimeout(() => {
            this.$router.push({
              path: `/login`
            })
          }, 1000)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    gotoLogin () {
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style scoped>
#register {
  width: 400px;
  margin: 100px auto;
}
.el-form-item {
  text-align: center;
}
.login {
  margin-top: 10px;
  font-size: 14px;
  line-height: 22px;
  color: #1ab2ff;
  cursor: pointer;
}
.login:hover {
  color: #2c2fd6;
}
</style>
