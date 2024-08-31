import { createWebHistory, createRouter } from 'vue-router'

import { useCategoryStore } from '../stores/useCategoryStore';
import { useProductStore } from '../stores/useProductStore';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: () => import("@/pages/Home.vue")
        },
        // Categories Route
        {
            path: '/categories',
            name: 'categories',
            component: () => import("@/pages/categories/CategoryIndex.vue"),
            // beforeEnter: async () => {
            //     const categoryStore = useCategoryStore();
            // },
        },
        {
            path: '/category/create',
            name: 'category-create',
            component: () => import("@/pages/categories/CategoryCreate.vue")
        },
        {
            path: '/category/edit/:id',
            name: 'category-edit',
            component: () => import("@/pages/categories/CategoryEdit.vue")
        },
        {
            path: '/category/:id',
            name: 'category-view',
            component: () => import("@/pages/categories/CategoryView.vue")
        },

        // Products Route
        {
            path: '/products',
            name: 'products',
            component: () => import("@/pages/products/ProductIndex.vue"),
            // beforeEnter: async () => {
            //     const productStore = useProductStore();
            // },
        },
        {
            path: '/product/create',
            name: 'product-create',
            component: () => import("@/pages/products/ProductCreate.vue"),
            beforeEnter: async () => {
                const categoryStore = useCategoryStore();
                categoryStore.index()
            },
        },
        {
            path: '/product/edit/:id',
            name: 'product-edit',
            component: () => import("@/pages/products/ProductEdit.vue")
        },
        {
            path: '/product/:id',
            name: 'product-view',
            component: () => import("@/pages/products/ProductView.vue")
        },
    ]
})

export default router;
