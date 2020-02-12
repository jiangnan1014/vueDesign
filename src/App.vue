<template>
  <div id="app">
    <div id="nav">
      <router-link class="music" to="/music">
        <i class="iconfont icon-yinle"></i> 音乐
      </router-link>
      <router-link class="movie" to="/movie">
        <i class="iconfont icon-dianying"></i>电影
      </router-link>
      <router-link class="read" to="/read">
        <i class="iconfont icon-yuedureading19"></i>阅读
      </router-link>
      <router-link class="my" to="/my">
        <i class="iconfont icon-wodedangxuan"></i>我的
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 10rem;
  margin: 0 auto;
  min-height: 100%;
   padding-bottom: 80px;
}
#nav {
  width: 10rem;
  text-align: center;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  z-index: 10;
  background: #ebebee;
  padding: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
a {
  text-decoration: none;
}
.music,
.movie,
.read,
.my {
  display: flex;
  flex-direction: column;
}
</style>
