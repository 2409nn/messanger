import { createRouter, createWebHistory } from "vue-router"
import reg from "../views/reg.vue"

const routes = [
    {
        path: "/reg",
        name: "reg",
        component: reg,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;