<template>
  <div class="">
    <p>Id: {{product.id}}</p>
    <p>Name: {{product.name}}</p>
    <p>Address: {{product.address}}</p>
    <p>Tele: {{product.telephone}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetail',
  data () {
    return {
      product: this.$store.state.productDetail
    }
  }
}
</script>

<style scoped lang="stylus">
  p
    font-family 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
    font-size 20px
    line-height 40px

</style>
