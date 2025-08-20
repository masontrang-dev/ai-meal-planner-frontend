<script setup lang="ts">
import Card from "primevue/card";
import Button from "primevue/button";
import Panel from "primevue/panel";
import RecipeFilter from "../components/RecipeFilter.vue";
import Image from "primevue/image";
import { useNavigate } from "../util/useNavigate";
import { useRecipeStore } from "../stores/recipes";
import { onMounted } from "vue";
import Rating from "primevue/rating";

const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.fetchRecipes();
});

const navigate = useNavigate();
</script>

<template>
  <div class="header">
    <RecipeFilter />
    <Button
      icon="pi pi-plus"
      label="Recipe"
      iconPos="left"
      @click="navigate('/recipes/add')"
    >
    </Button>
  </div>
  <Panel>
    <Card
      class="card"
      v-for="recipe in recipeStore.recipes"
      :key="recipe._id"
      @click="navigate(`/recipes/${recipe._id}`)"
    >
      <template #header>
        <img
          alt="user header"
          :src="recipe.photos[0]?.url || '/public/neptune-placeholder-48.jpg'"
        />
      </template>
      <template #title>{{ recipe.name }}</template>
      <template #subtitle
        >{{ recipe.cuisine }} | {{ recipe.mealType }}
        <Rating v-model="recipe.rating" readonly />
      </template>
      <template #content>
        <p class="recipe-description">
          {{ recipe.description }}
        </p>
      </template>
      <template #footer>
        <div class="button-group">
          <Button
            label="View Recipe"
            severity="secondary"
            variant="outlined"
            class="w-full"
          />
          <Button label="Add to Plan" class="w-full" />
        </div>
      </template>
    </Card>
  </Panel>
</template>

<style scoped>
.card {
  width: 100%;
  overflow: hidden;
  padding: 0rem;
}
.card:last-child {
  margin-bottom: 2rem;
}
.card img {
  width: 100%;
  height: 200px; /* Fixed height for consistency */
  object-fit: cover; /* Ensures the image covers the area while maintaining aspect ratio */
  object-position: center; /* Centers the image within the container */
}
.button-group {
  display: flex;
  gap: 0.5rem;
}
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  padding-top: 0.5rem;
  background-color: #242424;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.recipe-description {
  margin: 0;
}
</style>
