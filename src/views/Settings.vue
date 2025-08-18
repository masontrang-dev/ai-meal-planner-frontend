<script setup lang="ts">
import Panel from "primevue/panel";
</script>

<template>
  <Panel header="Settings">
    <div class="flex flex-col gap-2">
      <Divider />
    </div>

    <div
      v-for="option in groceries"
      :key="option.id"
      class="flex flex-col items-start gap-2"
    >
      <span>
        <input
          type="checkbox"
          :checked="option.checked"
          @change="onCheck(option)"
          style="margin-right: 8px"
        />
        {{ option.name }}
      </span>
    </div>
  </Panel>
</template>

<style scoped></style>
