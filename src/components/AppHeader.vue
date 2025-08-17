<script setup lang="ts">
import Button from "primevue/button";
import { useNavigate } from "../util/useNavigate";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";

const navigate = useNavigate();
</script>

<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-microsoft" class="mr-2" />
    </template>

    <template #center>
      <IconField>
        <InputIcon>
          <i class="pi pi-search" />
        </InputIcon>
        <InputText placeholder="Search" />
      </IconField>
    </template>

    <template #end>
      <Button icon="pi pi-bell" aria-label="notifications"></Button
    ></template>
  </Toolbar>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #dee2e6;
}
</style>
