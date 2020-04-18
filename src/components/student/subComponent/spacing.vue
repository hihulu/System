<template>
<div class="spacing">
</div>
</template>

<script>
export default {
  props: {
    message: {
      type: Number
    }
  },
  data () {
    return {
      height: '6px'
    }
  },
  watch: {
  }
}
</script>

<style lang='scss'>
.spacing {
    height: 10px;
    margin: 20px 0 20px;
    background-color: whitesmoke;
}
</style>
