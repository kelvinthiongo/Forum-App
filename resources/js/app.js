require('./bootstrap');

window.Vue = require('vue');
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

import AppHome from './components/AppHome.vue';
Vue.component('AppHome', AppHome);
import router from './Router/router.js'

const app = new Vue({
    vuetify : new Vuetify(),
    el: '#app',
    router,
});
