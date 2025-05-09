import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Default from './layout/wrapper/index.vue'
import blank from './layout/wrapper/blank.vue'
import Toaster from "@meforma/vue-toaster";

const app = createApp(App)

app.use(router)
app.component("default-layout", Default);
app.component("blank-layout", blank);
app.use(Toaster, { 
    position: 'top-right', 
    max: 5 
});

app.mount("#app")