<template>
  <div class="">
    {{product}}
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
