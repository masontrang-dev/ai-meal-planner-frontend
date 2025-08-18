<script setup lang="ts">
import Divider from "primevue/divider";
import Checkbox from "primevue/checkbox";
import CheckboxGroup from "primevue/checkboxgroup";

import { ref } from "vue";

const props = defineProps<{
  label: string;
  options: string[];
}>();

const mealType = ref<string[]>([]);
</script>

<template>
  <div class="filter-group">
    <h3>{{ label }}</h3>
    <div v-for="option in options">
      <Checkbox
        v-model="mealType"
        :inputId="`mealType-${option}`"
        :value="option"
      />
      <label :for="`mealType-${option}`"> {{ option }} </label>
    </div>

    <Divider />
  </div>
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
