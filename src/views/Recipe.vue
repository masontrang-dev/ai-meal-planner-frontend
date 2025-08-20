<script setup lang="ts">
import Panel from "primevue/panel";
import Divider from "primevue/divider";
import { ref, onMounted } from "vue";
import { useNavigate } from "../util/useNavigate";
import { useRoute } from "vue-router";
import Button from "primevue/button";
import Card from "primevue/card";
import Image from "primevue/image";
import Rating from "primevue/rating";
import Chip from "primevue/chip";
import Tag from "primevue/tag";
import { useRecipeStore } from "../stores/recipes";
import { computed } from "vue";

import ProgressSpinner from "primevue/progressspinner";

const route = useRoute();
const recipeId: string = route.params.recipeId as string;

const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.fetchRecipe(recipeId);
});

const recipe = computed(
  () =>
    recipeStore.fullRecipes[recipeId] || {
      title: "Recipe Not Found",
      description: "The recipe you are looking for does not exist.",
      ingredients: [],
      instructions: [],
      photos: [{ url: "" }],
      tags: [],
      cuisine: "",
      mealType: "",
      rating: 0,
      notes: "",
    }
);

const navigate = useNavigate();
</script>

<template>
  <div class="header">
    <Button
      label="Back"
      icon="pi pi-arrow-left"
      @click="navigate('/recipes')"
    />
    <Button
      icon="pi pi-pencil"
      label="Recipe"
      aria-label="Edit Recipe"
      iconPos="left"
      @click="navigate(`/recipes/${recipeId}/edit`)"
    />
  </div>
  <ProgressSpinner v-if="recipeStore.$state.loading" />
  <Card v-else class="card">
    <template #header>
      <img
        class="recipe-image"
        :src="recipe.photos[0]?.url || '/neptune-placeholder-48.jpg'"
      />
    </template>

    <template #title>{{ recipe.name }}</template>
    <template #subtitle
      ><div class="subtitle">
        <Tag :value="recipe.cuisine" v-if="recipe.cuisine" />
        <Tag :value="recipe.mealType" v-if="recipe.mealType" />
        <Rating v-model="recipe.rating" readonly />
      </div>
    </template>
    <template #content>
      <p>{{ recipe.description }}</p>
      <Panel header="Ingredients" toggleable>
        <ul>
          <li v-for="ingredient in recipe.ingredients" :key="ingredient.item">
            {{ ingredient.item }} - {{ ingredient.quantity }}
          </li>
        </ul>
      </Panel>
      <Panel header="Instructions" toggleable>
        <ol>
          <li
            v-for="instruction in recipe.instructions"
            :key="instruction.step"
          >
            {{ instruction.text }}
          </li>
        </ol>
      </Panel>
      <Panel header="Notes" toggleable>
        <p>{{ recipe.notes }}</p> </Panel
      ><Panel header="Tags" toggleable>
        <div class="tags">
          <Tag :value="tag" v-for="tag in recipe.tags" :key="tag" />
        </div>
      </Panel>
    </template>
  </Card>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 0.5rem;
}
.card {
  width: 100%;
  overflow: hidden;
  padding: 0.5rem;
  margin-bottom: 3rem;
}
.recipe-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
.subtitle {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.details {
  display: flex;
  justify-content: space-between;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}
.tags {
  display: flex;
  gap: 0.5rem;
}
</style>
