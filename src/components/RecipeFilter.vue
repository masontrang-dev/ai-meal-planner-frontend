<script setup lang="ts">
import Drawer from "primevue/drawer";
import Button from "primevue/button";
import Divider from "primevue/divider";
import RadioButton from "primevue/radiobutton";
import RadioButtonGroup from "primevue/radiobuttongroup";
import Checkbox from "primevue/checkbox";
import CheckboxGroup from "primevue/checkboxgroup";

import { ref } from "vue";
import RecipeSortRadios from "./RecipeSortRadios.vue";
import RecipeFilterCheckboxes from "./RecipeFilterCheckboxes.vue";

const visibleBottom = ref(false);
const drawerMode = ref("combined");

const filterOptions = [
  {
    key: "mealType",
    label: "Meal Type",
    options: ["Breakfast", "Lunch", "Dinner"],
  },
  {
    key: "cuisine",
    label: "Cuisine",
    options: ["Italian", "Mexican", "Indian"],
  },
  {
    key: "dietary",
    label: "Dietary Preferences",
    options: ["Vegetarian", "Vegan", "Gluten-Free"],
  },
  {
    key: "ingredients",
    label: "Ingredients",
    options: ["Chicken", "Beef", "Fish", "Vegetables"],
  },
];
</script>

<template>
  <div class="button-group">
    <Button
      icon="pi pi-sliders-h"
      @click="
        () => {
          visibleBottom = true;
          drawerMode = 'combined';
        }
      "
    />
    <Button
      icon="pi pi-angle-down"
      label="Sort"
      iconPos="right"
      @click="
        () => {
          visibleBottom = true;
          drawerMode = 'sort';
        }
      "
    />
  </div>

  <Drawer
    v-model:visible="visibleBottom"
    :header="drawerMode === 'combined' ? 'Filter & Sort' : ' '"
    position="bottom"
    style="height: 80vh"
  >
    <div class="drawer-content">
      <RecipeSortRadios />
      <RecipeFilterCheckboxes
        v-if="drawerMode === 'combined'"
        v-for="value in filterOptions"
        :key="value.label"
        :label="value.label"
        :options="value.options"
      />
    </div>
  </Drawer>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 0.5rem;
}
.filter-group {
  display: flex;
  flex-direction: column;

  gap: 0.25rem;
}

.drawer-content {
  display: flex;
  flex-direction: column;
}
</style>
