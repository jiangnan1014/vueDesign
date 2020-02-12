<template>
  <div>
    <div v-for="(item,index) of musics" :key="index">
      <div class="nav">
        <span class="title">{{item.title}}</span>
        <span @click="handleMore(item.subTitle,item.title)">更多</span>
      </div>
      <div class="val">
        <Item v-for="val of item.data" :key="val.id" :data="val"></Item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Music",
  data() {
    return {
      //   musics: {}
      musics: []
    };
  },
  async mounted() {
    await this.axios.get("top/playlist?order=hot").then(res => {
      var popularsongs = {};
      popularsongs.data = res.data.playlists.slice(0, 6);
      popularsongs.title = "热门歌曲";
      popularsongs.subTitle = "top/playlist?order=hot";
      this.musics.push(popularsongs);
      console.log(1);
    });
    await this.axios.get("top/playlist?cat=日语").then(res => {
      var Japanese = {};
      Japanese.data = res.data.playlists.slice(0, 6);
      Japanese.title = "日本音乐";
      Japanese.subTitle = "top/playlist?cat=日语";
      this.musics.push(Japanese);
    });
    await this.axios.get("top/playlist?cat=韩语").then(res => {
      var radio = {};
      radio.data = res.data.playlists.slice(0, 6);
      radio.title = "韩语电台";
      radio.subTitle = "top/playlist?cat=韩语";
      this.musics.push(radio);
    });
    console.log(4);
  },
  // mounted(){
  //     this.axios
  //       .get("http://192.168.14.14:5000/top/playlist?order=hot")
  //       .then(res => {
  //         this.musics.popularsongs = {};
  //         this.musics.popularsongs.data = res.data.playlists.slice(0, 3);
  //         this.musics.popularsongs.title = "热门歌曲";
  //         this.musics.popularsongs.subTitle = "top/playlist?order=hot";
  //         this.$forceUpdate()  /
  //       });
  // }
  methods: {
    handleMore(subTitle, title) {
      console.log(subTitle, title);
      console.log(title);
      this.$router.push({ name: "musicmore", query: { subTitle, title } });
    }
  }
};
</script>

<style scoped>
.val {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.nav {
  display: flex;
  justify-content: space-between;

  margin: 30px 0;
}
.nav span {
  font-size: 30px;
}
.nav .title{
  color: red;
  font-size: 40px;
}
</style>