import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSplide from '@splidejs/vue-splide';
import { Vue3Mq } from "vue3-mq"
import './assets/styles/reset.scss'
import '@splidejs/vue-splide/css';
/************************************************************** */
import * as vueFontawesome from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faXmark, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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
.use(VueSplide)
.component('font-awesome-icon', vueFontawesome.FontAwesomeIcon)
.mount('#app')

//AJOUT DES ICONES A LA LIBRAIRIE - SOLID ICON    
library.add(
    faSquareGithub,
    faLinkedin,
    faXmark,
    faMugHot
  );

   