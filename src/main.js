import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './utils/config'
import './utils/filter'
import VueAMap from 'vue-amap';

Vue.config.productionTip = false
Vue.use(VueAMap);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

VueAMap.initAMapApiLoader({
  // 高德的key
  key: '90c1427bc63e27b50cc3c94955cb8d8b',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 高德 sdk 版本，默认为 1.4.4
  v: '1.4.4'
});