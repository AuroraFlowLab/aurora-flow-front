import './assets/main.css'
// new Vue()生成一个应用实例对象
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"

// 1 以App为参数生成一个应用实例对象
//2 挂载到id为app的节点上


// 测试axios请求
import { getCategory } from '@/apis/testAPI'
getCategory().then(res=>{
    console.log(res)
})


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
