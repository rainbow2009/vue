import Main from "@/pages/Main"
import PostPage from "@/pages/PostPage"
import PostId from "@/pages/PostId"
import PostPageWhithStore from "@/pages/PostPageWhithStore"
import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts/',
        component: PostPage
    },
    {
        path: '/post/:id',
        component: PostId
    },
    {
        path: '/store',
        component: PostPageWhithStore
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;