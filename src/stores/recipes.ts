import { defineStore } from "pinia";
import type { RecipeFull } from "../types/Recipes";

export const useRecipeStore = defineStore("recipe", {
  state: () => ({
    recipes: [] as RecipeFull[],
    fullRecipes: {} as Record<string, RecipeFull>,
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchRecipes() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch("http://192.168.5.96:5001/api/recipes");
        if (!response.ok) throw new Error("Failed to fetch recipes");
        const data = await response.json();
        this.recipes = data;
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : "Failed to fetch recipes";
      } finally {
        this.loading = false;
      }
    },
    async fetchRecipe(id: string) {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch(
          `http://192.168.5.96:5001/api/recipes/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch recipe");
        const data = await response.json();
        this.fullRecipes[id] = data;
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : "Failed to fetch recipe";
      } finally {
        this.loading = false;
      }
    },
    async createRecipe(recipe: any) {
      const response = await fetch("http://192.168.5.96:5001/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      });
      const data = await response.json();
      this.recipes.push(data);
    },
    async updateRecipe(id: string, recipe: any) {
      const response = await fetch(
        `http://192.168.5.96:5001/api/recipes/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipe),
        }
      );
      const data = await response.json();
      this.fullRecipes[id] = data;
    },
    async deleteRecipe(id: string) {
      await fetch(`http://192.168.5.96:5001/api/recipes/${id}`, {
        method: "DELETE",
      });
      this.recipes = this.recipes.filter((recipe: any) => recipe.id !== id);
    },
  },
});
