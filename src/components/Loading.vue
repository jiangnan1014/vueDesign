<template>
<div class="loading">
  <img src="../assets/images/timg.gif" alt="">
</div>
</template>

<script>
export default {
  name: 'Loading', 

}
</script>

<style scoped>
.loading {
  position: fixed;
  left: 0;
  top: 0;
  background:  #fff;
  width: 100%;
  height: 400px;
  z-index: 100;
}
</style>