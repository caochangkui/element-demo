<template>
  <div class="header">
    <div class="logo">
      vue-ele-demo
    </div>
    <div class="navbar">
      <div class="btn" @click="handleMenu">
        <span class="el-icon-tickets"></span>
      </div>
      <div class="user">
        <span>用户</span>
        <span class="el-icon-caret-bottom"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
    }
  },
  methods: {
    handleMenu () {
      this.$emit('changeMenu')
      console.log(9)
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
</style>
