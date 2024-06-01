import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { setupRouter } from "./router";
import store from "./store";

const setupAll = async () => {
  const app = createApp(App);
  setupRouter(app);
  app.use(store);
  app.mount("#app");
};
setupAll();
