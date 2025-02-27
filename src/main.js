import { createApp } from 'vue'
import App from './App.vue'
import Contacts from '@/pages/v-contacts-page'
import Main from '@/pages/v-main-page'
import Specialists from '@/pages/v-specialists-page'
import Service from '@/pages/v-service-page'
import Vacancies from '@/pages/v-vacancies-page'
import Feedback from '@/pages/v-feedback-page'
import Discount from '@/pages/v-discount-page'
import AboutPage from '@/pages/v-about-page'

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
import USI from '@/pages/service-pages/v-usi'
import Analysis from '@/pages/service-pages/v-analysis'
import Fitoterapevt from '@/pages/service-pages/v-fitoterapevt'
import Diagnostika from '@/pages/service-pages/v-diagnostika'
import Stomatolog from '@/pages/service-pages/v-stomatolog'
import Mammolog from '@/pages/service-pages/v-mammolog'
import Neirohirurg from '@/pages/service-pages/v-neirohirurg'
import Sshirurg from '@/pages/service-pages/v-sshirurg'

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
            name: 'Service'
        },
        {
            path: '/vacancies-page',
            component: Vacancies,
            name: 'Vacancies'
        },
        {
            path: '/feedback-page',
            component: Feedback,
            name: 'Feedback'
        },
        {
            path: '/discount-page',
            component: Discount,
            name: 'Discount'
        },
        {
            path: '/service-page/gastr',
            component: Gastr,
            name: 'Gastr'
        },
        {
            path: '/service-page/ginecolog',
            component: Ginecolog,
            name: 'Ginecolog'
        },
        {
            path: '/service-page/cardiolog',
            component: Cardiolog,
            name: 'Cardiolog'
        },
        {
            path: '/service-page/lor',
            component: LOR,
            name: 'LOR'
        },
        {
            path: '/service-page/nevrolog',
            component: Nevrolog,
            name: 'Nevrolog'
        },
        {
            path: '/service-page/onkolog',
            component: Onkolog,
            name: 'Onkolog'
        },
        {
            path: '/service-page/oftalmolog',
            component: Oftalmolog,
            name: 'Oftalmolog'
        },
        {
            path: '/service-page/terapevt',
            component: Terapevt,
            name: 'Terapevt'
        },
        {
            path: '/service-page/urolog',
            component: Urolog,
            name: 'Urolog'
        },
        {
            path: '/service-page/hirurg',
            component: Hirurg,
            name: 'Hirurg'
        },
        {
            path: '/service-page/endocrinolog',
            component: Endocrinolog,
            name: 'Endocrinolog'
        },
        {
            path: '/service-page/medcom',
            component: Medcom,
            name: 'Medcom'
        },
        {
            path: '/service-page/procedures',
            component: Procedures,
            name: 'Procedures'
        },
        {
            path: '/service-page/neirohirurg',
            component: Neirohirurg,
            name: 'Neirohirurg'
        },
        {
            path: '/service-page/heart-hirurg',
            component: Sshirurg,
            name: 'Sshirurg'
        },
        {
            path: '/service-page/rentgen',
            component: Rentgen,
            name: 'Rentgen'
        },
        {
            path: '/service-page/usi',
            component: USI,
            name: 'USI'
        },
        {
            path: '/service-page/analysis',
            component: Analysis,
            name: 'Analysis'
        },
        {
            path: '/service-page/mammolog',
            component: Mammolog,
            name: 'Mammolog'
        },
        {
            path: '/contacts-page',
            component: Contacts,
            name: 'Contacts'
        },
        {
            path: '/specialists-page',
            component: Specialists,
            name: 'Specialists'
        },
        {
            path: '/about-page',
            component: AboutPage,
            name: 'AboutPage'
        },
        {
            path: '/service-page/fitoterapevt',
            component: Fitoterapevt,
            name: 'Fitoterapevt'
        },
        {
            path: '/service-page/diagnostika',
            component: Diagnostika,
            name: 'Diagnostika'
        },
        {
            path: '/service-page/stomatolog',
            component: Stomatolog,
            name: 'Stomatolog'
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)

app
    .use(router)
    .mount('#app')