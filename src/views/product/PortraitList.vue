<template>
  <div class="box">
    <el-progress :percentage="0"></el-progress>
    <el-progress :percentage="70"></el-progress>
    <el-progress :percentage="80" color="#8e71c7"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>
  </div>
</template>

<script>
export default {
  name: 'PortraitList'
}
</script>

<style scoped>
  .box {
    width: 500px;
  }
</style>
