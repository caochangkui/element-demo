<template>
  <div class="app">
    <Header @changeMenu="changeMenu"></Header>
    <div class="app-body">
      <Siderbar :isCollapse="isCollapse"></Siderbar>
      <div id="app-content">
        <Breadcrumb :list="list"></Breadcrumb>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header/Header'
import Siderbar from '../components/sidebar/Sidebar'
import Breadcrumb from '../components/breadcrumb/Breadcrumb'

export default {
  name: 'Full',
  components: {
    Header,
    Siderbar,
    Breadcrumb
  },
  data () {
    return {
      isCollapse: false
    }
  },
  created () {
    console.log(this.$route)
  },
  computed: {
    list () {
      return this.$route.matched
    },
    name () {
      return this.$route.name
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
      background #fff
</style>
