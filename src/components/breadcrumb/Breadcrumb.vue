<template>
  <div class="breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in list" :key="index">
        <router-link :to="item">{{ item.name }}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped lang="stylus">
  .breadcrumb
    line-height 40px
    background #fff
    margin-bottom 20px
</style>
