import Vue from 'vue';
import Router from 'vue-router';
import Student from '../components/student/Student.vue'

Vue.use(Router);

export default new Router({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            //redirect: '/login'
        },
        
        {
            path: '/',
            component: () => import('../components/common/Home.vue'),
            meta: { title: '自述文件' },
            redirect: '/dashboard',
            meta: {
                requireAuth: true
            },
            children: [
                {
                    path: '/student',
                    name: 'student',
                    component: Student
                },
                {
                    path: '/dashboard',
                    name: 'up',
                    component: () => import('../components/page/BaseTable.vue'),
                    meta: { title: '学生信息' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import('../components/page/Login.vue')
        },
    ]
});