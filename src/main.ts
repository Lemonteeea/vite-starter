import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import "./index.css";

const vue = createApp(App);

vue.use(router);
vue.mount("#app");
