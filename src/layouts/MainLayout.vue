<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import AppBottomNav from "@/components/AppBottomNav.vue";
</script>

<template>
  <div class="layout">
    <AppHeader />
    <div class="content">
      <router-view />
    </div>
    <AppBottomNav />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.content {
  padding: 0.5rem;
  flex: 1;
  overflow-y: auto;
}
</style>
