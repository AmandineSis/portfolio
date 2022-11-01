import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Vue3Mq } from "vue3-mq"
import './assets/styles/reset.scss'
/************************************************************** */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)
//Décommenter pour rendre Vuex store invisible
//app.config.performance = false;

/* Vue3Mq 'devices' preset
    phone	0
    tablet	768
    laptop	1370
    desktop	1906
    */
app.use(Vue3Mq, {
  preset: 'devices'
})
.use(store)
.use(router)
.component('fa-icon', FontAwesomeIcon)
.mount('#app')

//AJOUT DES ICONES A LA LIBRAIRIE - SOLID ICON    
library.add(
    faGithub,
    faLinkedin
  );

   