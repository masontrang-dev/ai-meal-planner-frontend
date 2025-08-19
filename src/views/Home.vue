<script setup lang="ts">
import Card from "primevue/card";
import RecipeFilter from "../components/RecipeFilter.vue";
</script>

<template>
  <div class="home">
    <p class="subtitle">
      Simplify meal planning, discover new recipes, and enjoy stress-free
      cooking
    </p>
  </div>

  <div class="feature-cards">
    <Card>
      <template #title>✨ AI-Generated Meal Plans</template>
      <template #content>
        <p class="m-0">
          Let our AI create personalized meal plans based on your dietary
          preferences, cooking skills, and available ingredients. Save time and
          reduce food waste with smart suggestions that adapt to your lifestyle
          and nutritional goals.
        </p>
      </template>
    </Card>

    <Card>
      <template #title>📚 Smart Recipe Management</template>
      <template #content>
        <p class="m-0">
          Store all your favorite recipes in one place. Our smart system
          organizes your collection, making it easy to find, filter, and sort
          recipes by cuisine, cook time, ingredients, or dietary restrictions.
          Never lose a recipe again!
        </p>
      </template>
    </Card>

    <Card>
      <template #title>🛒 Automated Grocery Lists</template>
      <template #content>
        <p class="m-0">
          Generate smart shopping lists that combine ingredients from your meal
          plan. Our system automatically categorizes items by grocery store
          section and suggests quantities based on your planned meals. Share
          lists with family members or sync with your favorite grocery app.
        </p>
      </template>
    </Card>

    <Card>
      <template #title>⏱️ Quick & Easy Meal Prep</template>
      <template #content>
        <p class="m-0">
          Get step-by-step cooking instructions with timers and video tutorials.
          Our meal prep mode helps you batch cook efficiently, with smart
          suggestions for make-ahead components that can be used across multiple
          meals throughout the week.
        </p>
      </template>
    </Card>

    <Card>
      <template #title>🌱 Nutritional Insights</template>
      <template #content>
        <p class="m-0">
          Track your nutritional intake with detailed breakdowns of calories,
          macros, and micros. Set personalized nutrition goals and get
          recommendations for balancing your meals. Our AI can suggest recipe
          modifications to meet your specific dietary needs, whether you're
          counting macros, following keto, or managing food allergies.
        </p>
      </template>
    </Card>

    <Card>
      <template #title>Features Coming Soon</template>
      <template #content>
        <p class="m-0"></p>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.home {
  font-size: 2em;
  text-align: center;
}
</style>
