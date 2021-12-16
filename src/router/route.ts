import  Adduser  from '../components/Adduser/Adduser.vue'
import  Viewuser  from '../components/Viewuser/Viewuser.vue';
const routes = [
  {
    path: '/adduser',
    name: 'addUser',
    component: Adduser
  },
  {
    path: '/viewuser',
    name: 'viewUser',
    component: Viewuser
  },
  ]

  export default routes;