<template>
  <div class="">
    <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group> -->
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">产品管理</span>
        </template>
          <el-menu-item index="2-1">产品列表</el-menu-item>
          <el-menu-item index="2-2">指标列表</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">账号管理</span>
        </template>
          <el-menu-item index="3-1">账号开设</el-menu-item>
          <el-menu-item index="3-2">账号编辑</el-menu-item>
          <el-menu-item index="3-3">账号操作记录</el-menu-item>
      </el-submenu>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">计费管理</span>
      </el-menu-item>
      <el-menu-item index="5" disabled>
        <i class="el-icon-setting"></i>
        <span slot="title">财务统计</span>
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
