import { createRouter, createWebHistory } from "vue-router";

import HomeWelcome from "@/views/Home.vue";

import Login from "@/views/Login.vue";

import ProjectList from "@/views/ProjectList.vue";
import Project from "@/views/Project.vue";
import ProjectCreate from "@/views/ProjectCreate.vue";
import ProjectTracking from "@/views/ProjectTracking.vue";

import AnsweredLeads from "@/views/AnsweredLeads.vue";

import TrackShipping from "@/views/TrackShipping.vue";

import PSite from "@/views/PSite.vue";
import PSiteList from "@/views/PSiteList.vue";
import PSiteProjectList from "@/views/PSiteProjectList.vue";
import Feasibility from "@/views/Feasibility.vue";
import ActiveProjects from "@/views/ActiveProjects.vue";

import ArchiveList from "@/views/ArchiveList.vue";

import Error from "@/views/Error404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeWelcome,
    // meta: { guestOnly: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { guestOnly: true },
  },
  {
    path: "/project-list",
    name: "ProjectList",
    component: ProjectList,
    meta: { authOnly: true },
  },
  {
    path: "/project",
    name: "Project",
    component: Project,
    meta: { authOnly: true },
  },
  {
    path: "/project-create/:id",
    name: "ProjectCreate",
    component: ProjectCreate,
    meta: { authOnly: true },
  },
  {
    path: "/project-tracking",
    name: "ProjectTracking",
    component: ProjectTracking,
    meta: { authOnly: true },
  },
  {
    path: "/track-shipping",
    name: "TrackShipping",
    component: TrackShipping,
    meta: { authOnly: true },
  },
  {
    path: "/answered-leads",
    name: "AnsweredLeads",
    component: AnsweredLeads,
    meta: { authOnly: true },
  },
  {
    path: "/procurement-site/:id",
    name: "PSite",
    component: PSite,
    meta: { authOnly: true },
    /*props: (route) => {
      const id = Number.parseInt(route.params.id);
      return { id };
    },*/
  },
  {
    path: "/procurement-site-list",
    name: "PSiteList",
    component: PSiteList,
    meta: { authOnly: true },
  },
  {
    path: "/procurement-site-project-list",
    name: "PSiteProjectList",
    component: PSiteProjectList,
    meta: { authOnly: true },
  },
  {
    path: "/pending-feasibility",
    name: "Feasibility",
    component: Feasibility,
    meta: { authOnly: true },
  },
  {
    path: "/active-projects",
    name: "ActiveProjects",
    component: ActiveProjects,
    meta: { authOnly: true },
  },
  {
    path: "/archive-list",
    name: "ArchiveList",
    component: ArchiveList,
    meta: { authOnly: true },
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
  },
  /*{
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/!* webpackChunkName: "about" *!/ "../views/About.vue"),
  },*/
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

function isLoggedIn() {
  return localStorage.getItem("authToken");
}

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.authOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!isLoggedIn()) {
      next({
        path: "/login",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestOnly)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (isLoggedIn()) {
      next({
        path: "/",
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
