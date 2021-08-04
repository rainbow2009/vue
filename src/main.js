import { createApp } from 'vue'
import App from './App'
import components from '@/components/UI'
import router from '@/router/routers';
import VIntersection from '@/directives/VIntersection'
import directives from '@/directives';
import store from './store';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

directives.forEach(directives => {
    app.directive(directives.name, directives);
});



app
    .use(router)
    .use(store)
    .mount('#app')
