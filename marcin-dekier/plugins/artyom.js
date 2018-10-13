  import Vue from 'vue'
  import Artyom from 'artyom.js'
if (process.browser) {
  let artyom = new Artyom()
  Vue.use(artyom)
}
// require styles
// import 'swiper/dist/css/swiper.css'

