<template>
  <router-link :to="{name:'moviedetail',params:{id:data.id}}">
    <div class="content">
      <img :src="data.images.large" alt />
      <p>{{data.title |format()}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "Movie",
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
.content {
  position: relative;
}
</style>
