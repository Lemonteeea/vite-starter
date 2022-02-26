import HomePage from "@/views/HomePage.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const AboutPage = () => import("@/views/AboutPage.vue");
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
