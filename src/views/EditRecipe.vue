<script setup lang="ts">
import Panel from "primevue/panel";
import Divider from "primevue/divider";
import { ref } from "vue";
import { useNavigate } from "../util/useNavigate";
import { useRoute } from "vue-router";
import Button from "primevue/button";

const recipes = [
  {
    _id: "66b5a1111111111111111111",
    title: "Spicy Korean BBQ Wraps",
    description:
      "Tender ribeye marinated in gochujang and wrapped in crisp romaine lettuce for a spicy, quick Korean dinner.",
    ingredients: [
      { name: "Romaine Lettuce", amount: "8 leaves" },
      { name: "Sliced Ribeye", amount: "12 oz" },
      { name: "Gochujang", amount: "2 tbsp" },
      { name: "Soy Sauce", amount: "1 tbsp" },
      { name: "Sesame Oil", amount: "1 tsp" },
    ],
    instructions: [
      "Marinate ribeye with gochujang, soy sauce, and sesame oil.",
      "Sear ribeye slices on high heat for 2 minutes per side.",
      "Serve wrapped in romaine lettuce with rice or kimchi.",
    ],
    photos: [
      { url: "/uploads/korean-wrap.jpg", caption: "Plated lettuce wraps" },
    ],
    tags: ["spicy", "quick", "Korean"],
    cuisine: "Korean",
    mealType: "Dinner",
    rating: 4,
    notes: "Next time, add more gochujang for heat.",
    createdAt: new Date("2025-08-01"),
    updatedAt: new Date("2025-08-01"),
  },
  {
    _id: "66b5a2222222222222222222",
    title: "Garlic Butter Salmon with Quinoa",
    description:
      "Juicy salmon fillets pan-seared in garlic butter, served with fluffy quinoa and sautéed spinach for a healthy meal.",
    ingredients: [
      { name: "Salmon Fillet", amount: "2 pieces (6 oz each)" },
      { name: "Garlic", amount: "3 cloves, minced" },
      { name: "Butter", amount: "2 tbsp" },
      { name: "Quinoa", amount: "1 cup uncooked" },
      { name: "Spinach", amount: "2 cups" },
    ],
    instructions: [
      "Cook quinoa according to package directions.",
      "Melt butter in pan, sauté garlic until fragrant.",
      "Pan-sear salmon until golden, spoon garlic butter over top.",
      "Serve salmon with quinoa and sautéed spinach.",
    ],
    photos: [
      { url: "/uploads/salmon-quinoa.jpg", caption: "Salmon over quinoa" },
    ],
    tags: ["healthy", "quick", "fish"],
    cuisine: "American",
    mealType: "Dinner",
    rating: 5,
    notes: "Delicious and filling. Works well for meal prep.",
    createdAt: new Date("2025-08-02"),
    updatedAt: new Date("2025-08-02"),
  },
  {
    _id: "66b5a3333333333333333333",
    title: "Vegetarian Mushroom Udon Soup",
    description:
      "A comforting Japanese noodle soup with savory mushrooms, fresh green onions, and chewy udon noodles in a rich broth.",
    ingredients: [
      { name: "Udon Noodles", amount: "12 oz" },
      { name: "Mushrooms", amount: "2 cups, sliced" },
      { name: "Vegetable Broth", amount: "4 cups" },
      { name: "Soy Sauce", amount: "2 tbsp" },
      { name: "Green Onions", amount: "2 stalks, sliced" },
    ],
    instructions: [
      "Bring broth to a simmer and add soy sauce.",
      "Add mushrooms and cook until tender.",
      "Cook udon noodles separately, then add to broth.",
      "Top with green onions before serving.",
    ],
    photos: [
      { url: "/uploads/mushroom-udon.jpg", caption: "Comforting udon bowl" },
    ],
    tags: ["vegetarian", "Japanese", "noodles"],
    cuisine: "Japanese",
    mealType: "Lunch",
    rating: 4,
    notes: "Could add tofu for more protein.",
    createdAt: new Date("2025-08-03"),
    updatedAt: new Date("2025-08-03"),
  },
];

const route = useRoute();
const recipeId = route.params.recipeId;
console.log("Recipe ID:", recipeId);
const recipe = recipes.find((r) => r._id === recipeId) || {
  title: "Recipe Not Found",
  description: "The recipe you are looking for does not exist.",
  ingredients: [],
  instructions: [],
  photos: [],
  tags: [],
  cuisine: "",
  mealType: "",
  rating: 0,
  notes: "",
  _id: "",
};

const navigate = useNavigate();
</script>

<template>
  <div class="header">
    <Button
      label="Back"
      icon="pi pi-arrow-left"
      @click="navigate(`/recipes/${recipeId}`)"
    />
  </div>
  <Panel header="Edit Recipe">
    <div class="flex flex-col gap-2">
      <Divider />
    </div>
  </Panel>
</template>

<style scoped>
.button-group {
  display: flex;
  gap: 0.5rem;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-top: 0.5rem;
}
</style>
