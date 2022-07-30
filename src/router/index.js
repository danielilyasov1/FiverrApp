import { createRouter, createWebHistory } from 'vue-router'
import home from "../views/home.vue"
import about from "../views/about.vue"
import gigApp from "../views/gig-app.vue"
import gigDetails from "../views/gig-details.vue"
// import userDetails from "../views/user-details.vue"
import checkoutDetails from "../views/checkout-details.vue"
import dashboard from "../views/dashboard.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: "/gig",
      name: "gig-app",
      component: gigApp,
    },
    {
      path: "/gig/:gigId",
      name: "gig-details",
      component: gigDetails,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: "/dashboard/:userId",
      name: 'dashboard',
      component: dashboard,
    },
   



    // {
    //   path: '/user',
    //   name: 'user-details',
    //   component: userDetails
    // },
    {
      path: '/checkout/:gigId',
      name: 'checkout-details',
      component: checkoutDetails
    },

  ]
})

export default router
