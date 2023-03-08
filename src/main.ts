/*
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-10-26 10:20:06
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-03-07 14:15:59
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";
import SvgIcon from "@/components/SvgIcon.vue";
import "virtual:svg-icons-register"
// import '@/icons'
import "element-plus/dist/index.css";
// 自定义样式
import './assets/styles/index.scss';
const app = createApp(App);
app.use(ElementPlus);
// 注册全局组件
app.component('SvgIcon',SvgIcon)
app.use(createPinia());
app.use(router);

app.mount("#app");
