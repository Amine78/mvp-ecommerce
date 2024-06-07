import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import Products from '@/pages/Products.vue';
import ProductDetail from '@/components/ProductDetail.vue';
import Basket from '@/pages/Basket.vue';
import fav from '@/pages/Fav.vue';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/product/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true 
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket,
    props: true 
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: fav,
    props: true 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;