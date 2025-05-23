import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    
   {
    path: "/chu",
    component: () => import("../components/admin/trangchu.vue"),
   },
   {
    path: "/thu",
    component: () => import("../components/thu_nhap_chi/thu.vue"),
   },
   {
    path: "/chi",
    component: () => import("../components/thu_nhap_chi/chi.vue"),
   },
   {
    path: "/thong-tin-ca-nhan",
    component: () => import("../components/khach_hang/thongtin.vue"),
   },
   {
    path: "/baocao",
    component: () => import("../components/baocao_thongke/baocao.vue"),
   },
   {
<<<<<<< Duc
    path: "/dang-nhap",
    component: () => import("../components/admin/dang-nhap.vue"),
    meta: { layout: "blank" },
   },
   {
    path: "/quan-ly-tai-khoan",
    component: () => import("../components/admin/quan_ly_tai_khoan.vue"),
    // meta: { layout: "blank" },
   },
=======
    path: "/dangky",
    component: () => import("../components/dangky/index.vue"),
   },
      {
    path: "/ngansach",
    component: () => import("../components/ngansach/index.vue"),
   },

   
>>>>>>> main

    
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router