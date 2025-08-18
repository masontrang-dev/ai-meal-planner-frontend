<script setup lang="ts">
import Panel from "primevue/panel";
import Card from "primevue/card";
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();

// Get the index of today (0 = Sun, 6 = Sat)
const todayIndex = today.getDay();

// Build an array for the current week, starting from Sunday
// Find the previous Sunday (or today if today is Sunday)
const startOfWeek = new Date(today);
startOfWeek.setDate(today.getDate() - today.getDay());

// Always start from the Sunday before or on 8/17 (if today is after 8/17)
const referenceSunday = new Date(today.getFullYear(), 7, 17); // August is month 7 (0-indexed)
if (startOfWeek > referenceSunday) {
  // Use the earlier of startOfWeek or referenceSunday
  startOfWeek.setTime(referenceSunday.getTime());
}

// Build a two-week array (14 days) starting from startOfWeek
const weekDates = Array.from({ length: 14 }, (_, i) => {
  const d = new Date(startOfWeek);
  d.setDate(startOfWeek.getDate() + i);
  return d;
});

import { computed } from "vue";

const firstDate = weekDates[0];
const lastDate = weekDates[weekDates.length - 1];

const monthYearLabel = computed(() => {
  const format = (date: Date) =>
    `${date.toLocaleString("default", {
      month: "short",
    })} ${date.getFullYear()}`;
  if (
    firstDate.getMonth() !== lastDate.getMonth() ||
    firstDate.getFullYear() !== lastDate.getFullYear()
  ) {
    return `${format(firstDate)} - ${format(lastDate)}`;
  }
  return format(firstDate);
});
</script>

<template>
  <div class="home">
    <h1>{{ monthYearLabel }}</h1>
    <Panel>
      <div class="schedule-container">
        <div class="days-of-week">
          <Card class="day-card" #title v-for="dayOfWeek in daysOfWeek">{{
            dayOfWeek
          }}</Card>
        </div>

        <div class="days-of-week">
          <Card
            class="day-card"
            v-for="date in weekDates.slice(0, 7)"
            :key="date.toDateString()"
            @click="() => console.log(date)"
          >
            <template #title>{{ date.getDate() }}</template>
            <template #content><p class="m-0"></p></template>
          </Card>
        </div>
        <div class="days-of-week">
          <Card
            class="day-card"
            v-for="date in weekDates.slice(7, 14)"
            :key="date.toDateString()"
            @click="() => console.log(date)"
          >
            <template #title>{{ date.getDate() }}</template>
            <template #content><p class="m-0"></p></template>
          </Card>
        </div>
      </div>
    </Panel>
  </div>
</template>

<style scoped>
.days-of-week {
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;
  max-width: 100%;
}

.schedule-container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 100vw;
}

.p-card-body {
  padding: 0.1rem;
}

.day-card {
  width: 100%; /* fills the grid column */
  min-width: 0; /* prevents overflow in flex/grid */
  box-sizing: border-box;
}
</style>
