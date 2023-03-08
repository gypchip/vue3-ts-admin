/*
 * @Description: 
 * @Version: 3.0
 * @Author: ganyanping
 * @Date: 2022-10-26 10:20:06
 * @LastEditors: ganyanping
 * @LastEditTime: 2023-03-06 14:01:17
 */
const path = require("path")
import { fileURLToPath, URL } from "node:url";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    vueJsx(),
    createSvgIconsPlugin({  // 批量导入本地svg插件
      iconDirs: [path.resolve(__dirname, 'src/icons/svg')],
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "localhost",
    port: 8081,
    proxy: {
      '/analyse': {
        target: 'https://www.fastmock.site/mock/f0efb7ec1b84b149fae0157ee9e6fc6f',
        changeOrigin: true
      }
    }
  }
});
