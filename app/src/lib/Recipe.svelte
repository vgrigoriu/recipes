<script lang="ts">
    import type { OpenRecipe } from "./OpenRecipeFormat";

    export let recipe: OpenRecipe
</script>

<article>
<h1>{recipe.recipe_name}</h1>

<h2>Ingrediente</h2>

<ul>
    {#each recipe.ingredients as ingredient}
        {#each Object.keys(ingredient) as ingredientName}
            <li>
                {ingredientName}:
                {#each ingredient[ingredientName].amounts as amount}
                    {amount.amount} {amount.unit}
                {/each}
            </li>
        {/each}
    {/each}
</ul>

<h2>Instrucțiuni</h2>

<ol>
    {#each recipe.steps as step}
        <li>{step.step}</li>
    {/each}
</ol>
</article>

<style>
    article {
        max-width: 40em;
        text-align: justify;
    }
</style>