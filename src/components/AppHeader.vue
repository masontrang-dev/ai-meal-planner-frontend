<script setup lang="ts">
import Button from "primevue/button";
import { useNavigate } from "../util/useNavigate";
import Toolbar from "primevue/toolbar";
import InputText from "primevue/inputtext";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";

import Popover from "primevue/popover";
import { ref } from "vue";
import { Card } from "primevue";

const navigate = useNavigate();

const op = ref();
const toggle = (event: any) => {
  op.value.toggle(event);
};
</script>

<template>
  <Toolbar>
    <template #start>
      <Button icon="pi pi-home" class="mr-2" @click="navigate('/')" />
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
      <Button
        type="button"
        aria-label="Notifications"
        icon="pi pi-bell"
        badge="2"
        variant="primary"
        badgeSeverity="secondary"
        @click="toggle"
      />
      <Popover ref="op">
        <div class="notification-tabs">
          <Button>All</Button>
          <Button variant="outlined">Alerts & Updates </Button>
          <Button variant="outlined">Messages </Button>
        </div>

        <Card>
          <template #title>Simple Card</template>
          <template #content>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
        </Card>
        <Card>
          <template #title>Simple Card</template>
          <template #content>
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione
              quam perferendis esse, cupiditate neque quas!
            </p>
          </template>
        </Card>
      </Popover>
    </template>
  </Toolbar>
</template>

<style scoped>
.notification-tabs {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  margin: 10px;
}

.p-toolbar {
  padding: 0.5rem;
}
</style>
