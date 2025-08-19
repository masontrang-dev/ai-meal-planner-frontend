<script setup lang="ts">
import Panel from "primevue/panel";
import Divider from "primevue/divider";
import { ref } from "vue";
import { useNavigate } from "../util/useNavigate";
import { useRoute } from "vue-router";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import InputSwitch from "primevue/inputswitch";
import InputTextarea from "primevue/inputtextarea";
import MultiSelect from "primevue/multiselect";
import Dropdown from "primevue/dropdown";
import Calendar from "primevue/calendar";
import Rating from "primevue/rating";
import { useForm } from "vee-validate";
import Select from "primevue/select";

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
const instructions = ref([{ name: "", amount: "" }]);
const photos = ref([]);
const tags = ref([]);
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
</script>

<template>
  <div>
    <h2>Recipe Details</h2>
    <form>
      <div class="form-field">
        <label for="title">Title</label>
        <InputText size="small" id="title" v-model="title" type="text" />
      </div>
      <div class="form-field">
        <label for="description">Description</label>
        <InputText size="small" id="description" v-model="description" />
      </div>
      <div class="form-field-row">
        <div class="form-field">
          <label for="mealType">Meal Type</label>
          <Select
            size="small"
            v-model="mealType"
            :options="mealTypes"
            optionLabel="name"
            placeholder="Select a MealType"
          />
        </div>
        <div class="form-field">
          <label for="cuisine">Cuisine</label>
          <Select
            size="small"
            v-model="cuisine"
            :options="cuisines"
            optionLabel="name"
            placeholder="Select a Cuisine"
          />
        </div>
      </div>

      <div
        v-for="(ingredient, index) in ingredients"
        :key="ingredient.name"
        class="ingredient"
      >
        <div class="ingredient-row" style="max-width: 90vw">
          <div class="form-field">
            <label v-if="index === 0" for="ingredientName">Name</label>
            <InputText
              size="small"
              id="ingredientName"
              v-model="ingredient.name"
              style="max-width: 50vw"
            />
          </div>

          <div class="form-field">
            <label v-if="index === 0" for="ingredientAmount">Amount</label>
            <InputText
              size="small"
              id="ingredientAmount"
              v-model="ingredient.amount"
              style="max-width: 35vw"
            />
          </div>

          <div>
            <Button
              arialabel="Remove Ingredient"
              icon="pi pi-minus"
              @click="removeIngredient(index)"
              v-if="ingredients.length > 1"
              size="small"
              severity="danger"
            />
          </div>
        </div>
        <Button
          v-if="index === ingredients.length - 1"
          icon="pi pi-plus"
          aria-label="Add Ingredient"
          @click="addIngredient"
          size="small"
        />
      </div>

      <div>
        <label for="instructions">Instructions</label>
        <InputText id="instructions" v-model="instructions" />
      </div>

      <div class="form-field">
        <label for="rating">Rating</label>
        <Rating v-model="rating" />
      </div>
      <div class="form-field">
        <label for="notes">Notes</label>
        <InputText size="small" id="notes" v-model="notes" />
      </div>
      <div class="form-field">
        <label for="tags">Tags</label>
        <InputText size="small" id="tags" v-model="tags" />
      </div>

      <Button type="submit" severity="secondary" label="Submit" />
    </form>
  </div>
</template>

<style scoped>
.ingredient-row {
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
}

.form-field {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
}
.form-field-row {
  width: 100%;
  display: flex;
  gap: 0.5rem;
}
</style>
