import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DataTableView from '@/views/tasks/DataTableView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import TaskIndexView from '@/views/tasks/IndexView.vue'
import TaskNewView from '@/views/tasks/NewView.vue'
import TaskEditView from '@/views/tasks/EditView.vue'
import TaskShowView from '@/views/tasks/ShowView.vue'
import TodayView from '@/views/TodayView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: TaskIndexView
  },
  {
    path: '/datatable',
    name: 'datatable',
    component: DataTableView
  },
  {
    path: '/tasks/new',
    name: 'tasks-new',
    component: TaskNewView
  },
  {
    path: '/tasks/edit/:id',
    name: 'tasks-edit',
    component: TaskEditView
  },
  {
    path: '/tasks/show/:id',
    name: 'tasks-show',
    component: TaskShowView
  },
  {
    path: '/today',
    name: 'today',
    component: TodayView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
