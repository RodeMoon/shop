import isAdminGuard from "@/modules/auth/guards/is-admin.guard";
import type { RouteRecordRaw } from "vue-router";

export const adminRoutes: RouteRecordRaw = {
  path: "/admin",
  name: "admin",
  beforeEnter: [isAdminGuard],
  redirect: { name: "admin-dashboard" },
  component: () => import("@/modules/admin/layouts/adminLayout.vue"),
  children: [{
    path: "dashboard",
    name: "admin-dashboard",
    component: () => import("@/modules/admin/views/dashboardView.vue"),
  },
  {
    path: "products",
    name: "admin-products",
    component: () => import("@/modules/admin/views/productsView.vue"),
  },
  {
    path: "products/:productId",
    name: "admin-product",
    props: true,
    component: () => import("@/modules/admin/views/productView.vue"),
  },
  ],
};
