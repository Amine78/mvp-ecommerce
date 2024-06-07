import { createApp } from 'vue'
import App from './App.vue';

import router from '@/router/index.ts';

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi';

//Vue.config.productionTip = false;
const vuetify = createVuetify({
    components,
    directives,
    aliases,
    mdi,
    theme:{
        defaultTheme:'light',
    },
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
  })
createApp(App).use(router).use(vuetify).mount('#app')