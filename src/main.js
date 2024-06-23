import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import 'primeicons/primeicons.css'

  //import preset        
import App from './App.vue'

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app')