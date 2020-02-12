<template>
  <div>
      <div class="nav"><img @click="handleBack" src="../../assets/images/fan.png" alt=""><span>{{title}}</span><span></span></div>
    <div class="content">
      <Item v-for="item of musics" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      musics: [],
      title:[]
    };
  },
  mounted() {
    var subTitle = this.$route.query.subTitle;
    this.title = this.$route.query.title;
    this.axios.get(`http://musicapi.leanapp.cn/${subTitle}`).then(res => {
      this.musics = res.data.playlists;
    });
  },
  methods:{
      handleBack(){
          this.$router.back()
      }
  }
};
</script>

<style  scoped>
.content {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.nav{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    font-size: 30px;
}
.nav img{
    width: 40px;
    height: 40px;
}
</style>