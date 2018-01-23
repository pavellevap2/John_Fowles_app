import Vue from 'vue'
import App from './App.vue'
import $ from "jquery";
window.jQuery = window.$ = $;
require('bootstrap');

import 'animate.css';

import './assets/scss/base.scss'

import VueRouter from "vue-router"
import {routes} from "./assets/javascript/routes";
Vue.use(VueRouter);
const router=new VueRouter({
  mode:'history',
  routes
});

let VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);


new Vue({
  el: '#app',
  render: h => h(App),
  router
});

