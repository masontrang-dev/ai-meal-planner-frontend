import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealPlan from "../views/MealPlan.vue";
import GroceryList from "../views/GroceryList.vue";
import Schedule from "../views/Schedule.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/meal-plan", component: MealPlan },
  { path: "/grocery-list", component: GroceryList },
  { path: "/schedule", component: Schedule },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
