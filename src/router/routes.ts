import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  {
    path: '/learn',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/LearnPage.vue') }],
  },

  {
    path: '/tinder',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/TinderPage.vue') }],
  },

  {
    path: '/tools',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/ToolsPage.vue') }],
  },

  {
    path: '/get-involved',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/GetInvolvedPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
