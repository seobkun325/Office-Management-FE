import { createRouter, createWebHistory } from 'vue-router'
import MainSection from '../views/MainSection.vue'
import OfficeSpaceSection from '../views/OfficeSpaceSection.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainSection
    },
    {
      path: '/officespace',
      name: 'officeSpace',
      component: OfficeSpaceSection
    }
  ]
})

export default router
