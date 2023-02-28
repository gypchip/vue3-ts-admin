/*
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-10-26 10:20:06
 * @LastEditors: ganyanping
 * @LastEditTime: 2022-12-06 15:07:12
 */
import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import App from "./App.vue";
import router from "./router";

import "element-plus/dist/index.css";
// 自定义样式
import './assets/styles/index.scss';
const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);

app.mount("#app");
