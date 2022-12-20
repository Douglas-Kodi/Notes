import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './routers';

const app = createApp(app)
app.use(router)
app.mount('#app')