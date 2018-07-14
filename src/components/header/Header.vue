<template>
  <div class="header">
    <div class="logo">
      vue-ele-demo
    </div>
    <div class="navbar">
      <div class="btn" @click="handleMenu">
        <span :class="menuBtn"></span>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>消息</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出 </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menuBtn: 'el-icon-tickets'
    }
  },
  computed: {
    username () {
      return JSON.parse(localStorage.getItem('user')).username
    }
  },
  methods: {
    handleMenu () {
      this.$emit('changeMenu')
      this.menuBtn === 'el-icon-tickets' ? this.menuBtn = 'el-icon-d-arrow-right' : this.menuBtn = 'el-icon-tickets'
    },
    logout () {
      this.$confirm('是否退出账户?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('user')
        this.$router.push({
          path: '/login'
        })
      }).catch(() => {
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .header
    width 100%
    height 60px
    display flex
    background #36a9e1
    .logo
      width 220px
      height 60px
      background #1e8fc6
      color #fff
      text-align center
      line-height 60px
    .navbar
      flex 1
      display flex
      align-items center
      justify-content space-between
      padding 0 10px
      color #fff
      .btn
        height 60px
        width 60px
        line-height 60px;
        cursor pointer
      .el-dropdown-link
        color #fff
        font-weight bold
        cursor pointer
</style>
