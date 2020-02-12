<template>
  <div>
     <div class="nav">
      <img @click="handleBack" src="../../assets/images/fan.png" alt />
      <span></span>
      <span></span>
    </div>
    <audio :src="url" controls></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url:''
    }
  },
  mounted(){
    var id = this.$route.params.id
    this.url=`https://music.163.com/song/media/outer/url?id=${id}`
  },
  methods:{
    handleBack() {
      this.$router.back();
    },
  }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
}
.nav img {
  width: 40px;
  height: 40px;
}
</style>