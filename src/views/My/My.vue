<template>
  <div class="box">
    my
    <el-amap class="map" vid="amapDemo" :zoom="zoom" :center="center">
      <el-amap-marker
        v-for="(marker, index) in markers"
        :key="marker.id"
        :position="marker.position"
        :events="marker.events"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :vid="index"
      ></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zoom: 15,
      center: [114.503827, 30.552012],
      markers: [
        {
          position: [121.5273285, 31.21515044],
          events: {
            click: () => {
              alert("click marker");
            },
            dragend: e => {
              console.log("---event---: dragend");
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
          visible: true,
          draggable: false,
          template: "<span>1</span>"
        }
      ]
    };
  }
};
</script>

<style scoped>
.box {
  margin: 0 auto;
}
.map {
  width: 500px;
  height: 500px;
}
</style>