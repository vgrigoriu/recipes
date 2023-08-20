<script lang="ts">
  import { parse } from 'yaml'
  import Ajv from "ajv"
  import * as recipe_schema from "./assets/schema.json"
  import Recipe from './lib/Recipe.svelte'
  import type { OpenRecipe } from './lib/OpenRecipeFormat';

  const validate_recipe = new Ajv().compile<OpenRecipe>(recipe_schema)

  async function getRecipe(url: string): Promise<OpenRecipe> {
    const response = await fetch(url)
    const recipe_text = await response.text()
    const recipe = parse(recipe_text)

    const is_valid = validate_recipe(recipe)
    if (!is_valid) {
      throw `not a valid recipe: ${validate_recipe.errors}`
    }

    return recipe
  }

  let recipePromise = getRecipe("https://raw.githubusercontent.com/vgrigoriu/recipes/main/recipes/scarpaccia.yaml")
</script>

<main>
  {#await recipePromise}
    <p>Loading recipe...</p>
  {:then recipe}
    <Recipe recipe={recipe} />
  {:catch err}
    {err}
  {/await}
</main>

<style>
</style>
