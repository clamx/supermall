<template>
  <div class="checkBox">
    <img v-if="!isChecked" src="~assets/img/cart/select.svg" alt="">
    <img v-if="isChecked" src="~assets/img/cart/check_active.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "category",
  props:{
    isChecked:{
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  .checkBox{
    width: 20px;
    height: 20px;
  }
</style>
