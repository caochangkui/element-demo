<template>
  <div class="">
    <div>
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
    <div style="max-width: 500px;margin: 60px 0;">
      <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="80" color="rgba(142, 113, 199, 0.7)"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>
<style scoped>
  .el-progress {
    line-height: 2;
  }
</style>
