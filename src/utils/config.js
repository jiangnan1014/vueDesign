import Vue from 'vue'
import 'lib-flexible/flexible.js'
import '@/assets/css/reset.css'
import axios from 'axios'
import Item from '@/components/Item.vue'
import Movie from '@/components/Movie.vue'
import Loading from '@/components/Loading.vue'
import Vant from 'vant'
import 'vant/lib/index.css'

axios.defaults.baseURL = 'http://musicapi.leanapp.cn/';

Vue.prototype.axios = axios

Vue.use(Vant)
Vue.component('Item',Item)
Vue.component('Movie',Movie)
Vue.component('Loading',Loading)