// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ui from './components/index'
import http from './util/http'
import qs from 'qs'
import storage from './util/storage'
import YunserUI from 'yunser-ui-vue'
import 'yunser-ui-vue/dist/yunser-ui.css'
import './scss/main.scss'

Vue.config.productionTip = false

Vue.use(YunserUI)
Vue.use(ui)

Vue.prototype.$http = http
Vue.prototype.$qs = qs
Vue.prototype.$storage = storage

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})

// const renderer = require('vue-server-renderer').createRenderer()
//
// renderer.renderToString(app, (err, html) => {
//     if (err) throw err
//     console.log(html)
//     // => <div data-server-rendered="true">Hello World</div>
// })
