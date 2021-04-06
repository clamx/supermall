import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import {request} from "./network/request";

Vue.config.productionTip = false

  //添加事件总线对象
Vue.prototype.$bus = new Vue()
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
   request({
     url:'/home/multidata'
   }).then(config => {
     console.log(config);
   }).catch(err => {
     console.log(err);
   })
