<template>
  <div class="sidebar">
    <el-menu
      :default-active="activeIndex"
      router
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="/product">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">产品管理</span>
        </template>
        <el-menu-item index="/product/product_list">产品列表</el-menu-item>
        <el-menu-item index="/product/portrait_list">指标列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-rank"></i>
          <span slot="title">账号管理</span>
        </template>
        <el-menu-item index="">账号开设</el-menu-item>
        <el-menu-item index="">账号编辑</el-menu-item>
        <el-menu-item index="">账号操作记录</el-menu-item>
      </el-submenu>
      <el-submenu index="">
        <template slot="title">
          <i class="el-icon-edit-outline"></i>
          <span slot="title">计费管理</span>
        </template>
        <el-menu-item index="">账单列表</el-menu-item>
        <el-menu-item index="">账单详情</el-menu-item>
      </el-submenu>
      <el-menu-item index="">
        <i class="el-icon-printer"></i>
        <span slot="title">财务统计</span>
      </el-menu-item>
      <el-menu-item index="" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isCollapse: Boolean
  },
  data () {
    return {
      elementRouter: {
        opended: true,
        router: true,
        active: ''
      }
    }
  },
  computed: {
    activeIndex () {
      const thisRoutPath = this.$route.path
      if (this.$route.name === 'ProductDetail') {
        return '/product/product_list'
      }
      return thisRoutPath
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style scoped>
  .sidebar {
    height: 100vh;
    background-color: rgb(84, 92, 100);
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 100vh;
  }

  .el-menu-vertical-demo {
    min-height: 100vh;
  }

  .el-menu-item.is-active,
  .el-submenu.is-active >>> .el-submenu__title {
    background: #484e5c !important;
  }

  .el-submenu .el-menu-item {
    padding-left: 60px !important;
  }
  .el-submenu.is-active .el-menu-item {
    background: #484e5c !important;
  }

  .el-submenu .el-menu-item:hover {
    padding-left: 60px !important;
    background: rgb(67, 74, 80) !important;
  }

</style>
