<script setup lang="ts">
import Divider from "primevue/divider";
import { ref } from "vue";
import { useNavigate } from "../util/useNavigate";

import Button from "primevue/button";
import InputText from "primevue/inputtext";

import Rating from "primevue/rating";

import Select from "primevue/select";
import Fieldset from "primevue/fieldset";
import Textarea from "primevue/textarea";

const navigate = useNavigate();

const mealTypes = ref([
  { name: "Breakfast", code: "B" },
  { name: "Lunch", code: "L" },
  { name: "Dinner", code: "D" },
]);

const cuisines = ref([
  { name: "American", code: "A" },
  { name: "Chinese", code: "C" },
  { name: "Indian", code: "I" },
  { name: "Italian", code: "IT" },
  { name: "Japanese", code: "J" },
  { name: "Korean", code: "K" },
  { name: "Mexican", code: "M" },
  { name: "Thai", code: "T" },
  { name: "Vietnamese", code: "V" },
]);

const title = ref("");
const description = ref("");
const ingredients = ref([{ name: "", amount: "" }]);
const instructions = ref([{ name: "", step: 1 }]);
const photos = ref("");
const tags = ref("");
const cuisine = ref("");
const mealType = ref("");
const rating = ref(0);
const notes = ref("");

const addIngredient = () => {
  ingredients.value.push({ name: "", amount: "" });
};

const removeIngredient = (index: number) => {
  if (ingredients.value.length > 1) {
    ingredients.value.splice(index, 1);
  }
};

const addInstruction = () => {
  instructions.value.push({ name: "", step: instructions.value.length + 1 });
};

const removeInstruction = (index: number) => {
  if (instructions.value.length > 1) {
    instructions.value.splice(index, 1);
  }
};
</script>

<template>
  <div class="form-container">
    <form @submit.prevent="">
      <div class="form-field">
        <label for="title">Title</label>
        <InputText id="title" v-model="title" type="text" />
      </div>
      <div class="form-field">
        <label for="description">Description</label>
        <Textarea id="description" v-model="description" rows="3" />
      </div>
      <div class="form-field-row">
        <div class="form-field">
          <label for="mealType">Meal Type</label>
          <Select
            v-model="mealType"
            :options="mealTypes"
            optionLabel="name"
            placeholder="Select a MealType"
          />
        </div>
        <div class="form-field">
          <label for="cuisine">Cuisine</label>
          <Select
            v-model="cuisine"
            :options="cuisines"
            optionLabel="name"
            placeholder="Select a Cuisine"
          />
        </div>
      </div>

      <Fieldset legend="Ingredients" toggleable>
        <div class="form-field">
          <label class="form-label">Ingredients</label>
          <div class="ingredients-list">
            <div
              v-for="(ingredient, index) in ingredients"
              :key="index"
              class="ingredient"
            >
              <div class="ingredient-row">
                <div class="form-field" style="flex: 2">
                  <InputText
                    v-model="ingredient.name"
                    :placeholder="`Ingredient ${index + 1}`"
                  />
                </div>
                <div class="form-field" style="flex: 1">
                  <InputText v-model="ingredient.amount" placeholder="Amount" />
                </div>
                <Button
                  v-if="ingredients.length > 1"
                  icon="pi pi-times"
                  @click="removeIngredient(index)"
                  severity="danger"
                  text
                  rounded
                />
              </div>
            </div>
            <Button
              icon="pi pi-plus"
              label="Add Ingredient"
              @click="addIngredient"
              class="p-button-text"
            />
          </div>
        </div>
      </Fieldset>

      <Fieldset legend="Instructions" toggleable>
        <div class="form-field">
          <div class="ingredients-list">
            <div
              v-for="(instruction, index) in instructions"
              :key="index"
              class="instruction"
            >
              <div class="instruction-row">
                <div class="form-field">
                  <InputText
                    v-model="instruction.name"
                    :placeholder="`Step ${instruction.step}`"
                  />
                </div>

                <Button
                  v-if="instructions.length > 1"
                  icon="pi pi-times"
                  @click="removeInstruction(index)"
                  severity="danger"
                  text
                  rounded
                />
              </div>
            </div>
            <Button
              icon="pi pi-plus"
              label="Add Instruction"
              @click="addInstruction"
              class="p-button-text"
            />
          </div>
        </div>
      </Fieldset>

      <div class="form-field">
        <label>Rating</label>
        <Rating v-model="rating" :cancel="false" />
      </div>

      <div class="form-field">
        <label for="notes">Notes</label>
        <Textarea id="notes" v-model="notes" rows="3" />
      </div>

      <div class="form-field">
        <label for="tags">Tags (comma separated)</label>
        <InputText id="tags" v-model="tags" />
      </div>

      <div class="form-field">
        <label for="tags">Photos (comma separated)</label>
        <InputText id="photos" v-model="photos" />
      </div>

      <div class="form-actions">
        <Button
          type="button"
          label="Cancel"
          severity="secondary"
          @click="$router.back()"
        />
        <Button type="submit" label="Save Recipe" severity="primary" />
      </div>
    </form>
  </div>
</template>

<style scoped>
.form-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0rem;
}

h2 {
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  font-size: 1.75rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field {
  margin-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-field label {
  font-weight: 500;
  color: var(--text-color-secondary);
  font-size: 0.9rem;
}

.form-field-row {
  display: flex;
  gap: 1rem;
  width: 100%;
}

.form-field-row > .form-field {
  flex: 1;
  margin-bottom: 0;
}

.ingredients-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ingredient {
  background: var(--surface-50);
  border-radius: 6px;

  transition: background-color 0.2s;
}

.ingredient:hover {
  background: var(--surface-100);
}

.ingredient-row {
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
}

.ingredient-row .form-field {
  margin-bottom: 0;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--surface-border);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .form-field-row,
  .ingredient-row {
    flex-direction: column;
    gap: 1rem;
  }

  .ingredient-row .form-field {
    width: 100%;
  }

  .form-actions {
    flex-direction: column;
  }

  .form-actions > * {
    width: 100%;
  }
}

/* PrimeVue overrides */
:deep(.p-inputtext) {
  width: 100%;
}

:deep(.p-rating .p-rating-icon) {
  color: var(--primary-color);
  font-size: 1.25rem;
}
</style>
