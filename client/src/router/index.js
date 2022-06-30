import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import HomePage from "../components/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignIn",
    component: SignIn,
  },

  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },

  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
