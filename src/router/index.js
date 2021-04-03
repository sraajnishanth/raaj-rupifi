import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";

import firebase from "firebase";
import store from "../store";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },

  // 404 Page
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // Always check if the user is logged in
  // (whenever a route explicitly specifies that authentication is required
  // using the "authRequired" key)
  if (to.matched.some(record => record.meta.authRequired)) {
    // Load user
    firebase.auth().onAuthStateChanged(user => {
      // If user obj does not exist --> redirect to login page
      if (!user) {
        alert("You must be logged in to see this page");
        next({ name: "Home" });
      } else {
        // store.commit("user/SET_USER", user);
        user.getIdToken().then(token => {
          store.commit("SET_USER_TOKEN", token);
        });

        next();
      }
    });
  } else {
    // Path does not required auth - Still we check the user
    firebase.auth().onAuthStateChanged(user => {
      // If user exist (is logged in) --> store in state.
      if (user) {
        // store.commit("user/SET_USER", user);
        user.getIdToken().then(token => {
          store.commit("SET_USER_TOKEN", token);
        });
        next();
      } else {
        next();
      }
    });
  }
});

export default router;
