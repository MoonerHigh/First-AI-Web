import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/index.vue";

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Home }],
});

export const setupRouter = (app) => {
  app.use(router);
};

export default router;
