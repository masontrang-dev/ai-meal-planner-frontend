import { defineStore } from "pinia";
import type { MealPlan } from "../types/MealPlans";

export const useMealStore = defineStore("meal", {
  state: () => ({
    mealPlan: {} as MealPlan,
    mealPlans: [] as MealPlan[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchMealPlan() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch("http://192.168.5.96:5001/api/meal-plan");
        if (!response.ok) throw new Error("Failed to fetch meal plan");
        const data = await response.json();
        this.mealPlan = data;
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : "Failed to fetch meal plan";
      } finally {
        this.loading = false;
      }
    },
    async createMealPlan(mealPlan: MealPlan) {
      const response = await fetch("http://192.168.5.96:5001/api/meal-plan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mealPlan),
      });
      const data = await response.json();
      this.mealPlan = data;
    },
    async updateMealPlan(mealPlan: MealPlan) {
      const response = await fetch(
        `http://192.168.5.96:5001/api/meal-plan/${mealPlan.date}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mealPlan),
        }
      );
      const data = await response.json();
      this.mealPlan = data;
    },
    async deleteMealPlan(mealPlan: MealPlan) {
      await fetch(`http://192.168.5.96:5001/api/meal-plan/${mealPlan.date}`, {
        method: "DELETE",
      });
      this.mealPlan = {} as MealPlan;
    },
  },
});
