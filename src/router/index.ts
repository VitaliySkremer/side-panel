import {createRouter, createWebHistory} from "vue-router";
import homePage from '../pages/homePage.vue';
import aboutPage from "../pages/aboutPage.vue";
import informingPage from "../pages/informingPage.vue";
import settingsPage from "../pages/settingsPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: homePage
  },
  {
    path: '/about',
    name: 'about',
    component: aboutPage
  },
  {
    path: '/shop',
    name: 'shop',
    component: aboutPage
  },
  {
    path: '/account',
    name: 'account',
    component: aboutPage
  },
  {
    path: '/informing',
    name: 'informing',
    component: informingPage
  },
  {
    path: '/settings',
    name: 'settings',
    component: settingsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default  router