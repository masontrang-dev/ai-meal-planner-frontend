<script setup lang="ts">
import Button from "primevue/button";

import { useNavigate } from "../util/useNavigate";

const navigate = useNavigate();
</script>

<template>
  <div class="app-header">
    <Button
      label="Grocery List"
      icon="pi pi-list"
      iconPos="top"
      @click="navigate('grocery-list')"
    />
    <Button
      label="Meal Plan"
      icon="pi pi-apple"
      iconPos="top"
      @click="navigate('meal-plan')"
    />
    <Button
      label="Schedule"
      icon="pi pi-calendar"
      iconPos="top"
      @click="navigate('schedule')"
    />
  </div>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-top: 1px solid #dee2e6;
}
</style>
