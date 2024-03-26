import { createRouter, createWebHistory } from 'vue-router';
import Bosh from '../views/Bosh/Bosh.vue'
import Faxrimiz from '../views/Faxrimiz/Faxrimiz.vue'
import Ittifoq from '../views/Ittifoq/Ittifoq.vue'
import Tuzilma from '../views/Tuzilma/Tuzilma.vue'
import Yangilik from '../views/Yangilik/Yangilik.vue'
import Qosh from '../views/Bosh/qosh.vue'
import Qoshqosh from '../views/Faxrimiz/qosh.vue'
import Ittifoqqosh from '../views/Ittifoq/qosh.vue'
import Tuzilmaqosh from '../views/Tuzilma/qosh.vue'
import Yangilikqosh from '../views/Yangilik/qosh.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Bosh
    },
    {
      path: '/faxrimiz',
      name: 'faxrimiz',
      component: Faxrimiz
    },
    {
      path: '/ittifoq',
      name: 'ittifoq',
      component: Ittifoq
    },
    {
      path: '/tuzilma',
      name: 'tuzilma',
      component: Tuzilma
    },
     {
      path: '/qosh',
      name: 'qosh',
      component: Qosh
    },
    {
      path: '/yangilik',
      name: 'yangilik',
      component: Yangilik
    },
    {
      path: '/faxqosh',
      name: 'faxqosh',
      component: Qoshqosh
    },
    {
      path: '/ittifoqqosh',
      name: 'ittifoqqosh',
      component: Ittifoqqosh
    },
    {
      path: '/tuzilmaqosh',
      name: 'tuzilmaqosh',
      component: Tuzilmaqosh
    },

    {
      path: '/yangilikqosh',
      name: 'yangilikqosh',
      component: Yangilikqosh
    },


  ]
});

export default router;
