<script setup lang="ts">
import Panel from "primevue/panel";
import Divider from "primevue/divider";
import { ref } from "vue";
import { useNavigate } from "../util/useNavigate";
import { useRoute } from "vue-router";
import Button from "primevue/button";

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
    <div class="flex flex-col gap-2">
      <Divider />
    </div>
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
}
</style>
