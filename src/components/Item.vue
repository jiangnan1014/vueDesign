<template>
  <router-link :to="{name:'musicdetail',params:{id:data.id}}">
    <div class="content">
      <p class="icon"><img  src="../assets/images/p0.png" alt="">{{data.playCount}}</p>
      <img :src="data.coverImgUrl" alt />
      <p>{{data.name |format()}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Item",
  props: {
    data: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped>
img {
  width: 230px;
  height: 230px;
}
p {
  color: #333;
}
.content{
  position: relative;
}
.icon img{
  width: 30px;
  height: 30px;
}
.icon{
  position: absolute;
  top: 5px;
  right: 15px;
  color: #fff;
}
</style>
