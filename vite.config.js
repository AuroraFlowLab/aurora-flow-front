import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 引入配置element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 引入elementplus 插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // 1 配置elementplus采用sass样式配色系统
      resolvers: [
        ElementPlusResolver(
          // {importStyle: "sass"}
        )],
    }),
  ],
  resolve: {
    // 实际的路径转换 @->src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       //2 自动导入定制化样式文件进行样式覆盖
  //       additionalData: `@use "@/styles/element/index.scss" as *;`,
  //     },
  //   },
  // },
})
