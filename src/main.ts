import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { createPinia } from "pinia";
import "./index.css";

const vue = createApp(App);
const pinia = createPinia();

vue.use(router);
vue.use(pinia);
vue.mount("#app");
