// import { createApp } from 'vue'
// import './style.css'
// import App from './App.vue'

// createApp(App).mount('#app')


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import '@/styles/index.scss'
// import SvgIcon from '@/icons'
import 'element-plus/dist/index.css'
// import '@/router/permission'
// import * as ELIcons from '@element-plus/icons-vue'
// import i18n from '@/i18n'

const app = createApp(App)

// SvgIcon(app)
app.use(router).mount('#app')
