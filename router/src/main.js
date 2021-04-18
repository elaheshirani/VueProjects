import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import { routes } from './routes';
/*import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'*/

/*import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)*/

Vue.config.productionTip = false
Vue.use(vueRouter);

const router = new vueRouter({
  routes,
  mode : 'history'
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
