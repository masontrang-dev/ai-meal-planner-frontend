<script setup lang="ts">
import Panel from "primevue/panel";
import Divider from "primevue/divider";
import { ref } from "vue";
import { useNavigate } from "../util/useNavigate";
import { useRoute } from "vue-router";
import Button from "primevue/button";
import RecipeForm from "../components/RecipeForm.vue";

const navigate = useNavigate();
</script>

<template>
  <div class="header">
    <Button
      label="Back"
      icon="pi pi-arrow-left"
      @click="navigate('/recipes')"
    />
  </div>
  <Panel header="Add Recipe">
    <RecipeForm />
  </Panel>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 0.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}
</style>
