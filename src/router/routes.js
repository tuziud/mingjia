const routes = [
  { path: "/", redirect: '/index' },
  {
    path: '/index',
    component: resolve => require(['../views/index.vue'], resolve)
  },
  {
    path: '/introduce',
    component: resolve => require(['../views/introduce.vue'], resolve)
  },
  {
    path: '/aged',
    component: resolve => require(['../views/aged.vue'], resolve)
  },
  {
    path: '/nursing',
    component: resolve => require(['../views/nursing.vue'], resolve)
  },
  {
    path: '/take_care',
    component: resolve => require(['../views/take_care.vue'], resolve)
  },
  {
    path: '/rehabilitation',
    component: resolve => require(['../views/rehabilitation.vue'], resolve)
  },
  {
    path: '/hl_hospital',
    component: resolve => require(['../views/hl_hospital.vue'], resolve)
  },
  {
    path: '/hl_hospital',
    component: resolve => require(['../views/hl_hospital.vue'], resolve)
  },
  {
    path: '/start_serve/star_7',
    component: resolve => require(['../views/start_serve/star_7.vue'], resolve)
  },
  {
    path: '/start_serve/star_8',
    component: resolve => require(['../views/start_serve/star_8.vue'], resolve)
  },
  {
    path: '/start_serve/star_9',
    component: resolve => require(['../views/start_serve/star_9.vue'], resolve)
  },
  {
    path: '/start_serve/star_10',
    component: resolve => require(['../views/start_serve/star_10.vue'], resolve)
  },
  {
    path: '/start_serve/star_11',
    component: resolve => require(['../views/start_serve/star_11.vue'], resolve)
  },
  // {
  //   path: '/start_serve',
  //   component: () => import('@/views/start_serve/start_serve'),
  //   children: [
  //     {
  //       path: 'start_serve',
  //       name: 'start_serve',
  //       component: () => import('@/views/start_serve/start_serve'),
  //     },
  //     {
  //       path: 'star_1',
  //       name: 'star_1',
  //       component: () => import('@/views/start_serve/star_1'),
  //     },
  //     {
  //       path: 'star_2',
  //       name: 'star_2',
  //       component: () => import('@/views/start_serve/star_2'),
  //     },
  //     {
  //       path: 'star_3',
  //       name: 'star_3',
  //       component: () => import('@/views/start_serve/star_3'),
  //     },
  //     {
  //       path: 'star_4',
  //       name: 'star_4',
  //       component: () => import('@/views/start_serve/star_4'),
  //     },
  //     {
  //       path: '/start_serve/star_5',
  //       name: 'star_5',
  //       component: () => import('@/views/start_serve/star_5'),
  //     },
  //     {
  //       path: 'star_6',
  //       name: 'star_6',
  //       component: () => import('@/views/start_serve/star_6'),
  //     },
  //     {
  //       path: 'star_7',
  //       name: 'star_7',
  //       component: () => import('@/views/start_serve/star_7'),
  //     },
  //     {
  //       path: 'star_8',
  //       name: 'star_8',
  //       component: () => import('@/views/start_serve/star_8'),
  //     }
  //     ,
  //     {
  //       path: 'star_9',
  //       name: 'star_9',
  //       component: () => import('@/views/start_serve/star_9'),
  //     }
  //     ,
  //     {
  //       path: 'star_10',
  //       name: 'star_10',
  //       component: () => import('@/views/start_serve/star_10'),
  //     }
  //     ,
  //     {
  //       path: 'star_11',
  //       name: 'star_11',
  //       component: () => import('@/views/start_serve/star_11'),
  //     }
  //   ]
  // },
  {
    path: '/index',
    component: resolve => require(['../views/appointment.vue'], resolve)
  }
];

export default routes
