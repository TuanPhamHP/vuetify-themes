import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import store from './store';
const app = createApp(App);
loadFonts();
app.use(store);
app.use(router);
app.use(vuetify);

app.mount('#app');
