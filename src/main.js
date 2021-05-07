import { createApp } from 'vue';
import App from './App.vue';

const modules = import.meta.glob('./components/**/*.json');

console.log(modules);
Object.keys(modules).forEach((path) => {
    import(path).then((res) => {
        console.log(res);
    });
});

// const requireConfig = require.context(
//     './components',
//     true,
//     /package.json$/,
// );

createApp(App).mount('#app');
