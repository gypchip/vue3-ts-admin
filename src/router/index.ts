/*
 * @Description: 路由配置
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-10-26 10:20:06
 * @LastEditors: ganyanping
 * @LastEditTime: 2022-12-06 16:54:55
 */
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "analysis-board",
      // eslint-disable-next-line prettier/prettier
      component: () => import('@/views/analysis-board/analysis-board.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: "/analysis-ascribe",
      name: "analysis-ascribe",
      // eslint-disable-next-line prettier/prettier
      component: () => import('@/views/analysis-ascribe/analysis-ascribe.vue'),
      meta: {
        keepAlive: true,
      },
    },
    {
      path: "/analysis-ascribe-add",
      name: "analysis-ascribe-add",
      // eslint-disable-next-line prettier/prettier
      component: () => import('@/views/analysis-ascribe/analysis-ascribe-add.vue'),
      meta: {
        keepAlive: true,
      },
    }
  ],
});

export default router;
