import { lazy } from 'solid-js';
import { useRoutes } from '@solidjs/router';

export const routes = [
  {
    path: ['/'],
    name: ['home'],
    component: lazy(() => import('@/modules/home/pages/Home.page')),
  },
  {
    path: ['/todos'],
    name: ['todo list'],
    component: lazy(() => import('@/modules/todos/pages/Todos.page')),
  },
];

export const Router = useRoutes(routes);
