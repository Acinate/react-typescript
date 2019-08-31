import Login from "./views/Auth/Login";
import Register from "./views/Auth/Register";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    layout: "/auth"
  }
];

export default routes;
