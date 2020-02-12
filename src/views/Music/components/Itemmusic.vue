<template>
  <div>
    <div class="content">
      <p>{{index+1 | number()}}</p>
      <img class="user" :src="data.al.picUrl" alt />
      <div class="name">
        <p>{{data.name |format()}}</p>
        <p>by:{{data.ar[0].name | format()}}</p>
      </div>
      <p class="time">{{data.dt | time()}}</p>
      <img
        class="play"
        :src="isPlay?require('@/assets/images/pause.png'):require('@/assets/images/play.png')"
        @click="handlePlay"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Itemmusic",
  data() {
    return {
      isPlay: true
    };
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    handlePlay() {
      this.isPlay = !this.isPlay
    }
  }
};
</script>

<style  scoped>
.user {
  width: 80px;
  height: 80px;
}
.play {
  width: 50px;
  height: 50px;
  position: absolute;
  right: 20px;
}
.content {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ebebeb;
  padding: 20px 0;
  position: relative;
  font-size: 24px;
}
.time {
  position: absolute;
  right: 100px;
}
</style>

