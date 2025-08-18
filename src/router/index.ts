import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import MealPlan from "../views/MealPlan.vue";
import GroceryList from "../views/GroceryList.vue";
import Schedule from "../views/Schedule.vue";
import Settings from "../views/Settings.vue";
import Recipes from "../views/Recipes.vue";
import Recipe from "../views/Recipe.vue";
import EditRecipe from "../views/EditRecipe.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/meal-plan", component: MealPlan },
  { path: "/recipes", component: Recipes },
  { path: "/grocery-list", component: GroceryList },
  { path: "/schedule", component: Schedule },
  { path: "/settings", component: Settings },
  {
    path: "/recipes/:recipeId",
    component: Recipe,
  },
  {
    path: "/recipes/edit/:recipeId",
    component: EditRecipe,
  },
  {
    path: "/recipes/add",
    component: EditRecipe,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
