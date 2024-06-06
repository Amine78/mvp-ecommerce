import { createApp } from 'vue'
import App from './App.vue';

import router from '@/router/index.ts';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

//Vue.config.productionTip = false;
const vuetify = createVuetify({
    components,
    directives
  })
createApp(App).use(router).use(vuetify).mount('#app')