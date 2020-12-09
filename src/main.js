import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import store from './store/router.js';
import firebase from 'firebase';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import { firebaseConfig } from "./config/firebaseConfig";

Vue.config.productionTip = false;
firebase.initializeApp(firebaseConfig);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
