import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.directive('highlight',{
  bind(el,binding) {
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;
    var delay = 0;
    if (binding.modifiers['desk']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg == 'background') {
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);
  }

});

new Vue({
  render: h => h(App),
}).$mount('#app')
