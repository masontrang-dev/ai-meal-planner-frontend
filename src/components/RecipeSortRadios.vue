<script setup lang="ts">
import Divider from "primevue/divider";
import RadioButton from "primevue/radiobutton";
import RadioButtonGroup from "primevue/radiobuttongroup";
import Panel from "primevue/panel";

import { ref } from "vue";

const sortOptions = ref([
  { label: "Alphabetical", value: "alphabetical" },
  { label: "Rating", value: "rating" },
  { label: "Recent", value: "recent" },
  { label: "Popularity", value: "popularity" },
  { label: "Cuisine (Grouped)", value: "cuisine" },
  { label: "Meal Type (Grouped)", value: "mealType" },
]);
</script>

<template>
  <div class="filter-group">
    <h3>Sort</h3>

    <RadioButtonGroup name="sortOption" class="button-group">
      <div v-for="option in sortOptions" :key="option.value">
        <RadioButton :inputId="option.value" :value="option.value" />
        <label :for="option.value">{{ option.label }}</label>
      </div>
    </RadioButtonGroup>
  </div>
</template>

<style scoped>
.button-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.filter-group {
  display: flex;
  flex-direction: column;

  gap: 0.25rem;
}
</style>
