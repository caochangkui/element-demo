<template>
  <div class="app">
    <Header @changeMenu="changeMenu"></Header>
    <div class="app-body">
      <Siderbar :isCollapse="isCollapse"></Siderbar>
      <div id="app-content">
         <p>contentcontentcontentcontentcontentcontentcontent</p>
         <p>contentcontentcontentcontentcontentcontentcontent</p>
         <p>contentcontentcontentcontentcontentcontentcontent</p>
         <p>contentcontentcontentcontentcontentcontentcontent</p>
         <p>contentcontentcontentcontentcontentcontentcontent</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import Siderbar from '../components/sidebar/Sidebar'

export default {
  name: 'Full',
  components: {
    Header,
    Siderbar
  },
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    changeMenu () {
      this.isCollapse = !this.isCollapse
    }
  }
}
</script>

<style scoped lang="stylus">
  .app-content
    border 1px solid red
    width 100%
</style>
