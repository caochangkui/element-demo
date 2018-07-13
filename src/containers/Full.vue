<template>
  <div class="app">
    <Header @changeMenu="changeMenu"></Header>
    <div class="app-body">
      <Siderbar :isCollapse="isCollapse"></Siderbar>
      <div id="app-content">
         <router-view></router-view>
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
  .app-body
    display flex
    #app-content
      flex 1
      padding 10px 20px
</style>
