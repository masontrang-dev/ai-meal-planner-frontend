<script setup lang="ts">
import Tabs from "primevue/tabs";
import TabList from "primevue/tablist";
import Tab from "primevue/tab";

const items = [
  { label: "Meal Plan", icon: "pi pi-apple", route: "/meal-plan" },
  { label: "Recipes", icon: "pi pi-book", route: "/recipes" },
  { label: "Schedule", icon: "pi pi-calendar", route: "/schedule" },
  { label: "Grocery List", icon: "pi pi-list", route: "/grocery-list" },
  { label: "Settings", icon: "pi pi-cog", route: "/settings" },
];
</script>

<template>
  <Tabs value="/">
    <TabList class="bottom-nav-tablist">
      <Tab v-for="tab in items" :key="tab.label" :value="tab.route">
        <router-link
          v-if="tab.route"
          v-slot="{ href, navigate }"
          :to="tab.route"
          custom
        >
          <a :href="href" @click="navigate" class="bottom-nav-link">
            <i :class="tab.icon + ' nav-icon'" />
            <span class="nav-label">{{ tab.label }}</span>
          </a>
        </router-link>
      </Tab>
    </TabList>
  </Tabs>
  <!-- <div class="bottom-nav">
    <TabMenu :model="items" v-model:activeIndex="activeIndex" />
  </div> -->
</template>

<style scoped>
.bottom-nav-tablist {
  width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
}
.bottom-nav-tablist > * {
  flex: 1 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.bottom-nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.15rem;
  text-decoration: none;
  color: inherit;
  width: 100%;
}

.nav-icon {
  font-size: 1.5rem;
  margin-bottom: 0.15rem;
  display: block;
}
.nav-label {
  font-size: 0.7rem;
  display: block;
  text-align: center;
}
</style>
