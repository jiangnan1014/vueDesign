<template >
  <div v-if="movies">
     <Loading v-if="isLoading" />
    <div class="container">
      <div class="nav">
        <img @click="handleBack" src="../../assets/images/fan.png" alt />
        <span></span>
        <span></span>
      </div>
      <div class="top">
        <div class="bg">
          <img :src="movies.images.large" alt />
        </div>
        <div class="top-title">
          <span>{{movies.title}}</span>
          <span class="score">{{movies.rating.average}}分</span>
          <p>{{movies.genres[0]}} {{movies.genres[1]}} {{movies.genres[2]}}</p>
          <p>{{movies.pubdate}}上映</p>
          <p>{{movies.countries[0]}}|{{movies.durations[0]}}</p>
          <p @click="handleClick" :class="{ expansion : active }">{{movies.summary}}</p>
        </div>
      </div>
      <div class="box">
        <h1>演职人员</h1>
        <div class="figure">
          <div class="wrap">
            <!-- <img class="user" :src="movies.directors[0].avatars.large" alt />
            <p class="user-title">{{movies.directors[0].name}}</p>-->
            <div class="box-item" v-for="item of movies.casts" :key="item.id">
              <img class="user" :src="item.avatars.medium" alt />
              <p class="user-title">{{item.name}}</p>
              <!-- <p class="user-name">江南</p> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      movies: "",
      opacity: 0,
      active: true,
      isLoading:true
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handle);
    var id = this.$route.params.id;
    var url = `https://douban-api.uieee.com/v2/movie/subject/${id}`;
    this.axios.get(url).then(res => {
      this.movies = res.data;
      this.isLoading = false;
    });
  },
  methods: {
    toggle() {
      this.$router.back();
    },
    handle() {
      var height = document.documentElement.scrollTop;
      if (height > 0) {
        this.opacity = 1;
      } else {
        this.opacity = 0;
      }
    },
    handleClick() {
      this.active = !this.active;
    },
    handleBack() {
      this.$router.back();
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handle);
  }
};
</script>

<style scoped>
.container {
  background: #ebebeb;
  height: 2000px;
  position: relative;
}
.return {
  widows: 50px;
  height: 50px;
  padding: 10px;
  border-radius: 50%;
  background: #fff;
  position: fixed;
  top: 16px;
  left: 20px;
  opacity: 0.5;
  z-index: 30;
}
.nav-title {
  font-size: 34px;
  text-align: center;
  width: 10rem;
  line-height: 88px;
  position: fixed;
  top: 0;
  background: #fff;
  z-index: 20;
}
.top {
  background: #fff;
  margin-bottom: 40px;
}
.bg {
  width: 10rem;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.bg img {
  width: 100%;
}
.top-title {
  padding: 30px;
}
.top-title span {
  padding-top: 18px;
  color: #191a1b;
  font-size: 34px;
}
.top-title .score {
  float: right;
  color: #ffb232;
  font-size: 36px;
  font-style: italic;
}
.top-title p {
  font-size: 26px;
  margin-top: 20px;
  color: #797d82;
}
.box {
  background: #fff;
  padding: 30px;
}
.box h1 {
  font-size: 30px;
  margin-bottom: 20px;
}
.user {
  width: 170px;
  height: 170px;
  padding: 20px 0;
}
.user-title {
  font-size: 24px;
  color: #191a1b;
  width: 170px;
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-name {
  font-size: 20px;
  color: #797d82;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.figure {
  overflow-x: auto;
  overflow-y: hidden;
}
.figure::-webkit-scrollbar {
  display: none;
}
.wrap {
  display: grid;
  grid-template-columns: repeat(6, 170px);
  grid-column-gap: 20px;
}
.expansion {
  white-space: pre-line;
  width: 100%;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
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