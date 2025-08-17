<script setup lang="ts">
import Button from "primevue/button";
import { useNavigate } from "../util/useNavigate";

const navigate = useNavigate();
</script>

<template>
  <div class="app-header">Header</div>
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
