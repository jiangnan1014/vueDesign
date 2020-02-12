<template>
  <div class="container">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img class="bg" src="https://i.loli.net/2019/10/21/8Qrtav6KsE7XGjM.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img class="bg" src="https://i.loli.net/2019/10/21/4bGdIeEUqmZhKAV.png" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img class="bg" src="https://i.loli.net/2019/10/21/arO4bo193jphTel.png" alt />
      </van-swipe-item>
    </van-swipe>
    <div class="content" v-for="item of data" :key="item.id" @click="handleClick(item)">
      <div class="user"> 
  
        <img :src="item.avatar" alt="">
        <p>{{item.author}}</p>
      </div>
            <p>{{item.title}}</p>
      <img class="poster" :src="item.imgSrc" alt="">
      <p>{{item.content}}</p>
      <div class="comment">
        <span><img src="../../assets/images/icon/chat1.png" alt="">{{item.collection}}</span>
        <span><img src="../../assets/images/icon/view.png" alt="">{{item.reading}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data:[]
    }
  },
  mounted() {
    var url = "http://yapi.demo.qunar.com/mock/34622/local";
    this.axios.get(url).then(res => {
      this.data = res.data
    });
  },
  methods:{
    handleClick(item){
      this.$router.push({name:'ReadDetail',params:{item}})
    }
  }
};
</script>

<style scoped>
.container{
  background: #ebebeb;
}
.van-swipe{
  margin-bottom: 20px;
}
.bg {
  width: 10rem;
  height: 400px;
}
.content{
  background: #fff;
  padding: 20px;
  margin: 10px 0;
}
.user{
  display: flex;
  align-items: center;
}
.user img{
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.poster{
  width: 100%;
  height: 300px;
  margin: 10px 0;
}
</style>