import { createApp } from 'vue'
import App from './App.vue'
import Contacts from '@/pages/v-contacts-page'
import Main from '@/pages/v-main-page'
import Specialists from '@/pages/v-specialists-page'

import Service from '@/pages/v-service-page'
import Gastr from '@/pages/service-pages/v-gastr'
import Ginecolog from '@/pages/service-pages/v-ginecolog'
import Cardiolog from '@/pages/service-pages/v-cardiolog'
import LOR from '@/pages/service-pages/v-lor'
import Nevrolog from '@/pages/service-pages/v-nevrolog'
import Onkolog from '@/pages/service-pages/v-onkolog'
import Oftalmolog from '@/pages/service-pages/v-oftalmolog'
import Terapevt from '@/pages/service-pages/v-terapevt'
import Urolog from '@/pages/service-pages/v-urolog'
import Hirurg from '@/pages/service-pages/v-hirurg'
import Endocrinolog from '@/pages/service-pages/v-endocrinolog'
import Medcom from '@/pages/service-pages/v-medcom'
import Procedures from '@/pages/service-pages/v-procedures'
import Rentgen from '@/pages/service-pages/v-rentgen'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter ({
    scrollBehavior (to){
        if (to.hash) {
            return {
              el: to.hash,
              behavior: 'smooth',
            }
          }
    },
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Main,
            name: 'Main'
        },
        {
            path: '/service-page',
            component: Service,
            name: Service
        },
        {
            path: '/service-page/gastr',
            component: Gastr,
            name: Gastr
        },
        {
            path: '/service-page/ginecolog',
            component: Ginecolog,
            name: Ginecolog
        },
        {
            path: '/service-page/cardiolog',
            component: Cardiolog
        },
        {
            path: '/service-page/lor',
            component: LOR
        },
        {
            path: '/service-page/nevrolog',
            component: Nevrolog
        },
        {
            path: '/service-page/onkolog',
            component: Onkolog
        },
        {
            path: '/service-page/oftalmolog',
            component: Oftalmolog
        },
        {
            path: '/service-page/terapevt',
            component: Terapevt
        },
        {
            path: '/service-page/urolog',
            component: Urolog
        },
        {
            path: '/service-page/hirurg',
            component: Hirurg
        },
        {
            path: '/service-page/endocrinolog',
            component: Endocrinolog
        },
        {
            path: '/service-page/medcom',
            component: Medcom
        },
        {
            path: '/service-page/procedures',
            component: Procedures
        },
        {
            path: '/service-page/rentgen',
            component: Rentgen
        },
        {
            path: '/contacts-page',
            component: Contacts
        },
        {
            path: '/specialists-page',
            component: Specialists
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)

app
    .use(router)
    .mount('#app')