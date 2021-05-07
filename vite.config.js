import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'), // 设置@指向src目录
        },
    },
    base: './', // 设置打包路径
    server: {
        port: 4000, // 端口号
        open: false, // 自动打开
        cors: true, // 允许跨域
        // // 设置代理
        // proxy: {
        //   '/pai': {
        //     target: 'http://xxxxx',
        //     changeOrigin: true,
        //     secure: false,
        //     rewrite: path => path.replace('/api/', '/'),
        //   }
        // }
    },
});
