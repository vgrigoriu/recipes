<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import Recipe from './lib/Recipe.svelte'
  import type { OpenRecipe } from './lib/OpenRecipeFormat';

  const recipe: OpenRecipe = {
    recipe_name: "Sarmale",
    ingredients: [
      {"orez": {amounts: [{amount: 1, unit: "kg"}]}},
      {"carne tocată": {amounts: [{amount: "1/2", unit: "kg"}]}}
    ],
    steps: [
      {step: "învelește sarmalele în foi de varză"},
      {step: "fierbe-le."}
    ],
  }
</script>

<main>
  <Recipe recipe={recipe} />
</main>

<style>
</style>
