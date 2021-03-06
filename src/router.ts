import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('~/views/Home.vue')
    },

    {
      path: '/expert/:id',
      name: 'expert',
      component: () => import('~/views/ExpertDedailPage.vue')
    },

    {
      path: '/news',
      alias: '/news/:id',
      name: 'news',
      component: () => import('~/views/NewsPage.vue'),
      props: route => ({
        what: route.query.what,
        where: route.query.where,
        page: route.query.page ? parseInt(route.query.page as string) : 1,
        tag: route.query.tag?.toString()
      })
    },

    // {
    //   path: '/news/:id',
    //   name: 'news',
    //   component: () => import('~/views/NewsPage.vue'),
    // },

    {
      path: '/events',
      name: 'events',
      component: () => import('~/views/Events.vue'),
      props: route => ({
        what: route.query.what,
        where: route.query.where,
        page: route.query.page ? parseInt(route.query.page as string) : 1,
        types: route.query.types,
        tags: route.query.tags
      })
    },
    {
      path: '/events/:id',
      name: 'eventDetail',
      component: () => import('~/views/EventDetail.vue'),
      props: route => ({
        id: route.params.id
      })
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('~/views/SignInForm.vue')
    },
    {
      path: '/register',
      component: () => import('~/views/SignUpForm.vue')
    },
    {
      path: '/ExpertOrCustomerStatus',
      name: 'ExpertOrCustomerStatus',
      component: () => import('~/views/ExpertOrCustomerStatus.vue')
    },

    {
      path: '/fields',
      name: 'fields',
      component: () => import('~/views/Fields.vue')
    },

    {
      path: '/fields/:name',
      name: 'fieldname',
      component: () => import('~/views/Fields.vue'),
      props: route => ({
        name: route.params.name.toString(),
        what: route.query.what,

        page: route.query.page ? parseInt(route.query.page as string) : 1
      })
    },

    {
      path: '/allexperts',
      name: 'allexperts',
      component: () => import('~/views/ExpertPage.vue'),
      props: route => ({
        what: route.query.what,
        where: route.query.where,
        page: route.query.page ? parseInt(route.query.page as string) : 1
      })
    },
    {
      path: '/expertfields',
      name: 'expertfields',
      component: () => import('~/views/ExpertsField.vue'),
      props: route => ({
        what: route.query.what,
        where: route.query.where,
        page: route.query.page ? parseInt(route.query.page as string) : 1
      })
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('~/views/Admin.vue')
    },
    {
      path: '/questionSheet',
      name: 'questionSheet',
      component: () => import('~/views/QuestionSheet.vue')
    },
    {
      path: '/FQAs',
      name: 'FQAs',
      component: () => import('~/views/FQAs.vue')
    },
    {
      path: '/requestPage',
      name: 'RequestPage',
      component: () => import('~/views/RequestPage.vue'),
      props: route => ({
        page: route.query.page ? parseInt(route.query.page as string) : 1,
      })
    },
    {
      path: '/OrderExpert',
      name: 'OrderExpert',
      component: () => import('~/views/ExpertOrder.vue')
    },
    {
      path: '/requests/:id',
      name: 'OrderExpertRequests',
      component: () => import('~/views/ExpertOrderRequest.vue')
    },
    {
      path: '/FQAs/:id',
      name: 'FQAanswer',
      component: () => import('~/views/FQAanswer.vue')
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: import('~/views/NotFound.vue') }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})
export default router
