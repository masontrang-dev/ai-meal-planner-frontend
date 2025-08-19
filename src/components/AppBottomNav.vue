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
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.bottom-nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 0;
}

.nav-icon {
  font-size: 1.5rem;
  margin-bottom: 0.1rem;
}

.nav-label {
  font-size: 0.6rem;
}

@media (max-width: 767px) {
  .bottom-nav-tablist {
    flex-direction: column;
    align-items: center;
  }
}
</style>
