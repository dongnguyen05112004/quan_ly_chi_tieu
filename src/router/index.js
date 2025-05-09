import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    
   
   {
    path: "/thu",
    component: () => import("../components/thu_nhap_chi/thu.vue"),
   },
   {
    path: "/chi",
    component: () => import("../components/thu_nhap_chi/chi.vue"),
   }, 

    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router