import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginForArco } from '@arco-plugins/vite-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host:'0.0.0.0' ,//ip地址
        open: true, // 设置服务启动时是否自动打开浏览器
        proxy: {
            "/api/baidu": {
                target: "https://sp0.baidu.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/baidu/, ""),
            },
            "/api/hitokoto": {
                target: "https://v1.hitokoto.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api\/hitokoto/, ""),
            },
            "/api": {
                target: "http://localhost:8080",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    plugins: [
      vue(),
      vitePluginForArco({
        style: 'css'
      })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
})
