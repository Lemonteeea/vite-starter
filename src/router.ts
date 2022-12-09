import HomePage from "@/views/HomePage.vue";
import AboutPage from "@/views/AboutPage.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: HomePage },
  { path: "/about", component: AboutPage },
] as RouteRecordRaw[];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
