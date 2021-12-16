import { Adduser } from '@/components/Adduser/Adduser';
import { Viewuser } from '@/components/Viewuser/Viewuser';
const routes = [
  {
    path: '/adduser',
    name: 'adduser',
    component: Adduser
  },
  {
    path: '/viewuser',
    name: 'viewuser',
    component: Viewuser
  },
  ]

  export default routes;