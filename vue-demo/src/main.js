// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import {fetchGet, fetchPost} from './https'

Vue.prototype.$http = axios
Vue.prototype.qs = Qs
Vue.prototype.$post = fetchPost
Vue.prototype.$get = fetchGet
Vue.config.productionTip = false
Vue.component('new-component', {
  props: ['post'],
  template: '' +
  '<div>' +
  '<h3>{{ post.title }}</h3><button v-on:click="$emit(\'enlarge-size\')">enlarge</button><div v-html="post.content"></div>' +
  '</div>' +
  ''
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data () {
    return {
      info: null
    }
  },

  methods: {
    getData: function () {
      alert('dd')
    }
  }

})
