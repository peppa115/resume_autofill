import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   proxy: {
  //     "/account": {
  //       target: "http://49.51.230.251:211", // 后端服务地址
  //       changeOrigin: true, // 修改请求头中的 Host 为目标地址
  //       // rewrite: (path) => path.replace(/^\/account/, ""), // 去掉 /account 前缀
  //     },
  //   },
  // },
});
