import Home from './views/Site/Home';
import About from './views/Site/About';
import Login from './views/Auth/Login';
import Register from './views/Auth/Register';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    layout: ''
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    layout: '/auth'
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    layout: '/auth'
  }
];

export default routes;
