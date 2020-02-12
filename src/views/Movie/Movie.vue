<template>
  <div>
    <div v-for="item of movies" :key="item.id">
      <div >
        <div class="nav">
          <span class="title">{{item.title}}</span>
          <span  @click="handleMore(item.subTitle,item.title)">更多</span>
        </div>
      </div>
      <div class="val">
        <Movie v-for="val of item.data" :key="val.id" :data="val" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: {}
    };
  },
  async mounted() {
    await this.axios
      .get("https://douban.uieee.com/v2/movie/top250")
      .then(res => {
        this.movies.top250 = {};
        this.movies.top250.title = "豆瓣top250";
        this.movies.top250.subTitle = "top250";
        this.movies.top250.data = res.data.subjects.slice(0, 6);
        this.$forceUpdate();
      });
    await this.axios
      .get("https://douban.uieee.com/v2/movie/in_theaters")
      .then(res => {
        this.movies.inTheaters = {};
        this.movies.inTheaters.title = "正在热映";
        this.movies.inTheaters.subTitle = "in_theaters";
        this.movies.inTheaters.data = res.data.subjects.slice(0, 6);
        this.$forceUpdate();
      });
    await this.axios
      .get("https://douban.uieee.com/v2/movie/coming_soon")
      .then(res => {
        this.movies.comingSoon = {};
        this.movies.comingSoon.title = "即将上映";
        this.movies.comingSoon.subTitle = "coming_soon";
        this.movies.comingSoon.data = res.data.subjects.slice(0, 6);
        this.$forceUpdate();
      });
  },
  methods:{
       handleMore(subTitle,title){
           this.$router.push({name:'moviemore',query:{subTitle,title}})
       }
  }
};
</script>

<style  scoped>
.nav {
  display: flex;
  justify-content: space-between;
  
  margin: 30px 0;
}
.nav span {
  font-size: 30px;
}
.val {
  display: flex;
  justify-content: space-evenly;
      flex-wrap: wrap;
}
.nav .title{
  color: red;
  font-size: 40px;
}
</style>