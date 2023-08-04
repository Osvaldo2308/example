import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// import swal from 'sweetalert'


loadFonts()

createApp(App)
  .use(store)
  // .use(swal)
  .use(router)
  .use(vuetify)
  .mount('#app')