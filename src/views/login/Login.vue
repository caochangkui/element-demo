<template>
  <div class="login">
    <p class="title">Vue-Element Demo</p>
    <form action="/" method="post" id="login-form">
        <input type="text" v-model="username" placeholder="用户名" >
        <input type="password" v-model="password" placeholder="登陆密码" >
        <button type="button" @click="login">登&nbsp;&nbsp;陆</button>
        <p class="register" @click="gotoRegist">没有账户？点击注册</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: 'admin',
      password: '123456',
      exist: false
    }
  },
  computed: {
    users () {
      if (localStorage.getItem('userList')) {
        return JSON.parse(localStorage.getItem('userList'))
      } else {
        return this.$store.state.users
      }
    }
  },
  created () {
    if (localStorage.getItem('userList')) {
      const userList = JSON.parse(localStorage.getItem('userList'))
      localStorage.clear()
      localStorage.setItem('userList', JSON.stringify(userList))
    } else {
      localStorage.clear()
    }
  },
  methods: {
    login () {
      if (!this.username.trim()) {
        alert('请输入用户名！')
        return
      }
      if (!this.password.trim()) {
        alert('请输入用户名！')
        return
      }
      this.users.map((val, index) => {
        if (val.username === this.username && val.password === this.password) {
          this.exist = true
        }
      })
      if (this.exist) {
        const thisuser = {
          username: this.username,
          password: this.password
        }
        localStorage.setItem('user', JSON.stringify(thisuser))
        this.$message({
          message: '登录成功',
          type: 'success',
          duration: 1000
        })
        setTimeout(() => {
          this.$router.push({
            path: `/`
          })
        }, 400)
      } else {
        alert('用户名或密码错误，请重新登录')
      }
    },
    gotoRegist () {
      this.$router.push({
        path: '/register'
      })
    }
  }
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.login {
    width: 340px;
    margin: auto;
}
.title {
  font-size: 26px;
  line-height: 50px;
  font-weight: bold;
  margin: 40px;
  text-align: center;
}
#login-form>input {
  width: 340px;
  height: 34px;
  display: block;
  margin-top: 26px;
  background: #f2f2f2;
  color: #333;
  border: 1px solid #7da9c7;
  outline: none;
  text-indent: 20px;
  font-size: 14px;
}
#login-form>button {
  width: 340px;
  height: 34px;
  display: block;
  margin-top: 26px;
  background: #1ab2ff;
  color: #fff;
  border: 1px solid #1ab2ff;
  outline: none;
  border-radius: 100px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}
.register {
  margin-top: 10px;
  font-size: 16px;
  line-height: 22px;
  text-indent: 14px;
  color: #1ab2ff;
  cursor: pointer;
}
.register:hover {
  color: #2c2fd6;
}
</style>
