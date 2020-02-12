<template>
  <div>
    <div class="nav">
      <img @click="handleBack" src="../../assets/images/fan.png" alt />
      <span></span>
      <span></span>
    </div>
    <img class="bg" :src="playlist.coverImgUrl" alt="">
    <div class="bo">播放列表:</div>
    <div class="content">
      <!-- <div class="item" v-for="item of playlist.tracks" :key="item.id" @click="handlePlay(item.id)" >
        <img class="user" :src="item.al.picUrl" alt="">
        <p class="name">{{item.name}}</p>
        <img class="play" src="../../assets/images/pause.png" alt="">
      </div> -->
      <Itemmusic  v-for="(item,index) of playlist.tracks" :key="item.id" :index="index" :data="item" @click.native="handlePlay(item.id)"/>
    </div>
  </div>
</template>

<script>
import Itemmusic from './components/Itemmusic'
export default {
  data() {
    return {
      playlist:[]
    };
  },
  components:{
    Itemmusic
  },
  mounted() {
        var id =  this.$route.params.id
        this.axios.get(`http://musicapi.leanapp.cn/playlist/detail?id=${id}`).then(res=>{
          this.playlist = res.data.playlist
        })
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handlePlay(id){
      this.$router.push({name:"musicplay",params:{id:id}})
    }
  }
};
</script>

<style  scoped>
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
.bg{
  width: 100%;
  height: 500px;;
}
.bo{
  height: 50px;
  line-height: 50px;
  font-size: 40px;
  background: #ebebeb;
}
.user{
  width: 100px;
  height: 100px;
}
.play{
  width: 50px;
  height: 50px;

}
.item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  margin: 20px 0;
  border-bottom: 1px solid #ebebeb;
}
</style>