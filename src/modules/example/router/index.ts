import { RouteConfig } from 'vue-router'
const Example = () => import(/* webpackChunkName: "example" */ '@example/Index.vue')
const ExampleMaster = () => import(/* webpackChunkName: "example" */ '@example/views/Master.vue')
 
const routes: RouteConfig[] = [
  {
    path: '/example',
    component: Example,
    children: [
      {
        path: '',
        component: ExampleMaster,
        
      },
    ],
  },
]
export default routes
