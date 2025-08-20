<script setup lang="ts">
import Panel from "primevue/panel";
import { useRecipeStore } from "../stores/recipes";
import { onMounted } from "vue";
import { useNavigate } from "../util/useNavigate";
import Card from "primevue/card";
import Button from "primevue/button";
import Rating from "primevue/rating";

const recipeStore = useRecipeStore();

onMounted(() => {
  recipeStore.fetchRecipes();
});

const today = new Date();
const weekView = today.getDate();
</script>

<template>
  <Panel header="Meal Plan">
    <Card class="card">
      <template #header> </template>
      <template #title></template>
      <template #subtitle> </template>
      <template #content> </template>
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
