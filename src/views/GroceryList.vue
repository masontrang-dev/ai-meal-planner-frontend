<script setup lang="ts">
import OrderList from "primevue/orderlist";
import Panel from "primevue/panel";
import { ref, watch } from "vue";

const groceries = ref([
  { id: 1, name: "Apples", checked: false },
  { id: 2, name: "Bananas", checked: false },
  { id: 3, name: "Carrots", checked: false },
  { id: 4, name: "Doughnuts", checked: false },
]);

const selectedItems = ref([]);

watch(selectedItems, (newSelection) => {
  groceries.value.forEach((g) => {
    g.checked = newSelection.some((item) => item.id === g.id);
  });
});

// Handler for checkbox click
function onCheck(option) {
  option.checked = !option.checked;
  if (option.checked) {
    // Add to selectedItems if not already present
    if (!selectedItems.value.some((item) => item.id === option.id)) {
      selectedItems.value = [...selectedItems.value, option];
    }
  } else {
    // Remove from selectedItems
    selectedItems.value = selectedItems.value.filter(
      (item) => item.id !== option.id
    );
  }
}
</script>

<template>
  <!-- <OrderList
    v-model="groceries"
    dataKey="id"
    breakpoint="575px"
    pt:pcListbox:root="w-full sm:w-56"
    selectionMode="single"
    :selection="selectedItems"
  >
    <template #option="{ option }">
      <span>
        <input
          type="checkbox"
          :checked="option.checked"
          @change="onCheck(option)"
          style="margin-right: 8px"
        />
        {{ option.name }}
      </span>
    </template>
  </OrderList> -->
  <Panel header="Grocery List" class="w-full sm:w-56">
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
