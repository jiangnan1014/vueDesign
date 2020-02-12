<template>
  <div>
    <div class="nav">
      <img class="bg" @click="handleBack" src="../../assets/images/fan.png" alt />
      <span></span>
      <span></span>
    </div>
    <img :src="data.imgSrc" alt />
    <div class="content">
      <div class="user">
        <img :src="data.avatar" alt />
        <p>{{data.author}}</p>
        <p>发表于 {{data.dateTime}}</p>
      </div>
      <h1 class="title">{{data.title}}</h1>
      <div class="share">
          <hr>
          <img @click="handleShou" class="shou"  :src="isshou?require('../../assets/images/icon/collection-anti.png'):require('../../assets/images/icon/collection.png')" alt="">
          <img @click="handleFen" class="fen" :src="isfen?require('../../assets/images/icon/share-anti.png'):require('../../assets/images/icon/share.png')" alt="">
      </div>
      <p>{{data.detail}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      isshou:true,
      isfen:true
    };
  },
  mounted() {
    var item = this.$route.params.item;
    this.data = item;
    this.isshou = localStorage.getItem("ishouw");
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleShou(){
        this.isshou = !this.isshou
        localStorage.setItem("isshou",this.isshou)
    },
    handleFen(){
        this.isfen = !this.isfen
    }
  }
};
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
.bg {
  width: 100%;
  height: 400px;
}
.user {
  display: flex;
  align-items: center;
}
.user img {
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.title {
  font-size: 30px;
  font-weight: bold;
}
.content {
  padding: 20px;
}
.share{
    position: relative;
    margin: 60px 0;
}
.shou,.fen{
    position: absolute;
    top: -50px
}
.shou{
    right: 130px;
}
.fen{
    right: 0px;
}
</style>