<template>
  <div>
      <div class="nav"><img @click="handleBack" src="../../assets/images/fan.png" alt=""><span>{{title}}</span><span></span></div>
    <div class="val">
      <Movie v-for="item of movies" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      title:[]
    };
  },
  mounted() {
    var subTitle = this.$route.query.subTitle;
    this.title = this.$route.query.title;
    this.axios.get(`https://douban.uieee.com/v2/movie/${subTitle}`).then(res => {
      this.movies = res.data.subjects;
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
.val {
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