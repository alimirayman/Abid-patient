import {
  createLayout,
  createRoute
} from '@/helpers/importer'

const views = [
  createRoute('/', 'Home', [], '/profile'),
  createRoute('/profile', 'Profile'),
  createRoute('/patitentHistory', 'History'),
  createRoute('/reports', 'Reports'),
  createRoute('/appoinment', 'Appoinment')
]

export const routes = [
  // Base Layout
  createLayout('/', 'base', views),
  // 404 page
  createRoute('*', '404')
]
